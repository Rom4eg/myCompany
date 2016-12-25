from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

class RegistrationSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])
    username = serializers.CharField()
    password = serializers.CharField()
    retape_password = serializers.CharField(allow_blank=False, write_only=True)

    def validate(self, data):
        if data.get('password') != data.get('retape_password'):
            raise serializers.ValidationError({'retape_password': 'The password must match.'})
        del data['retape_password']
        return data

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    class Meta:
        model = User
        fields = ('password', 'email', 'username', 'retape_password')
        write_only_fields = ['password', 'retape_password']
