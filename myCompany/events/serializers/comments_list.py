from rest_framework import serializers
from events import models

class CommentSerializer(serializers.ModelSerializer):

    author = serializers.StringRelatedField()
    event = serializers.IntegerField()

    class Meta:
        model = models.Comment
        fields = "__all__"
