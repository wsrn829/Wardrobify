from django.db import models

class BinVO(models.Model):
    closet_name = models.CharField(max_length=100)
    import_href = models.CharField(max_length=200, unique=True)
    bin_number = models.PositiveSmallIntegerField(null=True)
    bin_size = models.PositiveSmallIntegerField(null=True)

    def __str__ (self):
        return f'{self.import_href}'

class Shoe(models.Model):
    name = models.CharField(max_length=150)
    manufacturer = models.CharField(max_length=150)
    color = models.CharField(max_length=150)
    picture_url = models.CharField(max_length=100000)
    bin = models.ForeignKey(
        BinVO,
        related_name="shoes",
        on_delete=models.CASCADE,
        null=True
    )
