from rest_framework import serializers
from rules import models

class RulesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Rule
        fields = '__all__'
