# Register your models here.
from django.contrib import admin
from .models import State, Park, Trail, Bike

admin.site.register([State, Park, Trail, Bike])
