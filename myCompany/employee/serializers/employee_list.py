from rest_framework import serializers
from employee import models
from users.serializers import UserSerializer

class EmployeeListSerializer(serializers.ModelSerializer):

    department = serializers.StringRelatedField()
    company = serializers.StringRelatedField()
    user = UserSerializer()
    
    class Meta:
        model = models.Employee
        fields = '__all__'
