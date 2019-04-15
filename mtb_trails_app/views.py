from django.shortcuts import render
from rest_framework import viewsets

from .serializers import StateSerializer, ParkSerializer, TrailSerializer, BikeSerializer
from .models import State, Park, Trail, Bike


class StateView(viewsets.ModelViewSet):
    queryset = State.objects.all()
    serializer_class = StateSerializer


class ParkView(viewsets.ModelViewSet):
    queryset = Park.objects.all()
    serializer_class = ParkSerializer


class TrailView(viewsets.ModelViewSet):
    queryset = Trail.objects.all()
    serializer_class = TrailSerializer


class BikeView(viewsets.ModelViewSet):
    queryset = Bike.objects.all()
    serializer_class = BikeSerializer
