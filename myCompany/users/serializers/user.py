from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):

    is_authenticated = serializers.BooleanField()

    class Meta:
        model = User
        fields = ['email', 'is_active', 'date_joined', 'is_authenticated']
