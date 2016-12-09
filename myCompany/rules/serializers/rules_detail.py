from rest_framework import serializers
from rules import models
from employee.serializers import EmployeeListSerializer

class RulesSerializer(serializers.ModelSerializer):

    reviewed = EmployeeListSerializer(many=True)
    author = serializers.StringRelatedField()
    
    class Meta:
        model = models.Rule
        fields = '__all__'
