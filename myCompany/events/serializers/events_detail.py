from rest_framework import serializers
from events.serializers import CommentSerializer
from events import models

class EventSerializer(serializers.ModelSerializer):

    author = serializers.StringRelatedField()
    comments = CommentSerializer(many=True)

    class Meta:
        model = models.Event
        fields = "__all__"
