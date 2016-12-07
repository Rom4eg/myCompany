from rest_framework import serializers
from rules import models

class RulesListSerializer(serializers.ModelSerializer):

    author = serializers.StringRelatedField()

    class Meta:
        model = models.Rule
        fields = ["id", "title", "content_preview", "create_date", "author"]
