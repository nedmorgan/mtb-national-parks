from rest_framework import serializers

from .models import State, Park, Trail, Bike


class BikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bike
        fields = ('make', 'model', 'tire_size', 'tubeless', 'groupset',
                  'weight', 'full_suspension', 'dropper_post', 'photo_url')


class TrailSerializer(serializers.ModelSerializer):
    bikes = BikeSerializer(many=True, read_only=True)

    class Meta:
        model = Trail
        fields = ('name', 'location', 'site_url',
                  'photo_url', 'length', 'max_elv', 'min_elv', 'bikes')


class ParkSerializer(serializers.ModelSerializer):
    trails = TrailSerializer(many=True, read_only=True)

    class Meta:
        model = Park
        fields = ('name', 'lat', 'long', 'description', 'photo_url', 'trails')


class StateSerializer(serializers.ModelSerializer):
    parks = ParkSerializer(many=True, read_only=True)

    class Meta:
        model = State
        fields = ('name', 'acronym', 'parks')
