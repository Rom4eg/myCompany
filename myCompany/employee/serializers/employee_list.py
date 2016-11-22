from rest_framework import serializers
from employee import models

class EmployeeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Employee
        fields = '__all__'
