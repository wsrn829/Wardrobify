from django.db import models
from django.urls import reverse

class LocationVO(models.Model):
    import_href = models.CharField(max_length=200, null=True)
    closet_name = models.CharField(max_length=150, null=True)
    section_number = models.PositiveSmallIntegerField(null=True)
    shelf_number = models.PositiveSmallIntegerField(null=True)


class Hat(models.Model):
    fabric = models.CharField(max_length=150, null=True)
    style_name = models.CharField(max_length=150, null=True)
    color = models.CharField(max_length=150)
    picture_url = models.URLField(null=True)

    location = models.ForeignKey(
        LocationVO,
        related_name="hats",
        on_delete=models.CASCADE,
        null = True
    )

    def get_api_url(self):
        return reverse("api_show_hat", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name
