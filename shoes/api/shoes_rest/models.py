from django.db import models

class Shoe(models.Model):
    name = models.CharField(max_length=150)
    manufacturer = models.CharField(max_length=150)
    color = models.CharField(max_length=150)
    picture_url = models.CharField(max_length=100000)
    bin = models.CharField(max_length=150)
    # bin is a foreign key
