from rest_framework import serializers
from events import models

class EventListSerializer(serializers.ModelSerializer):

    author = serializers.CharField()

    class Meta:
        model = models.Event
        fields = '__all__'
