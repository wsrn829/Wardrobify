from django.urls import path
from .api_views import api_list_shoes, api_shoe_detail

urlpatterns = [
    path('shoes/',api_list_shoes, name="api_list_shoes" ),
    path('shoes/<int:id>/',api_shoe_detail, name="api_shoe_detail"),
]
