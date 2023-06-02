from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Shoe
from common.json import ModelEncoder
import json

class ListShoesEncoder(ModelEncoder):
    model = Shoe
    properties = [
        'name',
        'manufacturer',
        'color',
        'picture_url',
        'bin',
        "id"
    ]

@require_http_methods(['GET', 'POST'])
def api_list_shoes(request):
    if request.method == 'GET':
        shoes = Shoe.objects.all()
        return JsonResponse({"shoes": shoes},encoder=ListShoesEncoder)
    else:
        content = json.loads(request.body)
        shoe = Shoe.objects.create(**content)
        return JsonResponse({"shoe": shoe}, encoder=ListShoesEncoder)

@require_http_methods(['DELETE'])
def api_shoe_detail(request, id):
    if request.method == 'DELETE':
        count,_ = Shoe.objects.filter(id=id).delete()
        return JsonResponse({"delete": count > 0})
