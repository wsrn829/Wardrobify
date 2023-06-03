from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Shoe, BinVO
from common.json import ModelEncoder
import json

class BinVOEncoder(ModelEncoder):
    model = BinVO
    properties = [ 'closet_name', 'import_href']

class ListShoesEncoder(ModelEncoder):
    model = Shoe
    properties = [
        'id',
        'name',
        'manufacturer',
        'color',
        'picture_url',
        'bin'
    ]
    encoders = {
        "bin": BinVOEncoder()
    }

@require_http_methods(['GET', 'POST'])
def api_list_shoes(request):
    if request.method == 'GET':
        shoes = Shoe.objects.all()
        return JsonResponse({"shoes": shoes},encoder=ListShoesEncoder, safe=False)
    else:
            content = json.loads(request.body) #this is the json body from insomnia
            try:
                bin_href = content["bin"] #the bin key in the content object which is a string that we wrote
                bin = BinVO.objects.get(import_href=bin_href) #get that instance of the value object with that propert that is in our json body
                content["bin"] = bin #json object set equal the actual bin
            except BinVO.DoesNotExist:
                return JsonResponse({"message": "Invalid bin"}, status=400)

            shoe = Shoe.objects.create(**content)
            return JsonResponse({"shoe": shoe}, encoder=ListShoesEncoder)

@require_http_methods(['GET','DELETE'])
def api_shoe_detail(request, id):
    if request.method == 'DELETE':
        count,_ = Shoe.objects.filter(id=id).delete()
        return JsonResponse({"delete": count > 0})
    else:
       shoe = Shoe.objects.get(id=id)
       return JsonResponse({"shoe": shoe}, encoder=ListShoesEncoder, safe=False)
