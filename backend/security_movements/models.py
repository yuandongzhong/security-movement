from django.db import models

class Movement(models.Model):
    id = models.AutoField(primary_key=True)
    security_movement_type = models.CharField(max_length = 20)
    buyer = models.CharField(max_length = 100, blank = True)
    seller = models.CharField(max_length = 100, blank = True)
    no_of_units = models.IntegerField()
    price_per_unit = models.IntegerField()
    date_created = models.DateField(auto_now_add=True)