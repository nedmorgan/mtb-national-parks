from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('states', views.StateView)
router.register('parks', views.ParkView)
router.register('trails', views.TrailView)
router.register('bikes', views.BikeView)

urlpatterns = [
    path('', include(router.urls))
]
