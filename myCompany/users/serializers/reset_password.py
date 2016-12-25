import os
from base64 import b64encode
from django.contrib.auth.models import User
from django.core.mail import send_mail
from rest_framework import serializers

class ResetPasswordSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    def update(self, inst, data):
        new_pass = b64encode(os.urandom(12)).decode('utf-8')
        user = User.objects.get(email=data.get('email'))
        # TODO send email with hash
        return inst

    class Meta:
        model = User
        fields = ['email']
