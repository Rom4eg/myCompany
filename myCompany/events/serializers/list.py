from rest_framework import serializers
from events import models

class EventListSerializer(serializers.ModelSerializer):

    author = serializers.StringRelatedField()

    class Meta:
        model = models.Event
        fields = ("id", "title", "content_preview", "author", "create_date", "start_date", "end_date")
