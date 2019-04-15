from django.db import models

# Create your models here.


class State(models.Model):
    name = models.CharField(max_length=255)
    acronym = models.CharField(max_length=2)

    def __str__(self):
        return self.name


class Park(models.Model):
    name = models.CharField(max_length=255)
    lat = models.CharField(max_length=255)
    lng = models.CharField(max_length=255)
    description = models.TextField()
    photo_url = models.TextField()
    state = models.ForeignKey(
        State, on_delete=models.CASCADE, related_name='states')

    def __str__(self):
        return self.name


class Trail(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    site_url = models.TextField()
    photo_url = models.TextField()
    length = models.CharField(max_length=255)
    max_elv = models.CharField(max_length=255)
    min_elv = models.CharField(max_length=255)
    park = models.ForeignKey(
        Park, on_delete=models.CASCADE, related_name='parks')

    def __str__(self):
        return self.name


class Bike(models.Model):
    make = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    tire_size = models.CharField(max_length=255)
    tubeless = models.BooleanField(default=False)
    groupset = models.CharField(max_length=255)
    weight = models.CharField(max_length=255)
    full_suspension = models.BooleanField(default=False)
    dropper_post = models.BooleanField(default=False)
    photo_url = models.CharField(max_length=400, blank=True)
    trail = models.ForeignKey(
        Trail, on_delete=models.CASCADE, related_name='trails')

    def __str__(self):
        return self.make
