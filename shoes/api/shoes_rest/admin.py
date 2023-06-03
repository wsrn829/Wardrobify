from django.contrib import admin
from .models import Shoe, BinVO
# Register your models here.
@admin.register(Shoe)
class ShoeAdmin(admin.ModelAdmin):
    pass
@admin.register(BinVO)
class BinVOAdmin(admin.ModelAdmin):
    pass
