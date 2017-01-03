import os
import hashlib
from datetime import datetime
from base64 import b64encode
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.template import Template, Context
from django.template.loader import get_template
from django.conf import settings
from django.core.exceptions import MultipleObjectsReturned, ObjectDoesNotExist
from rest_framework import serializers
from users.models import ResetPassword

class ResetPasswordSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    def validate(self, data):
        try:
            User.objects.get(email=data.get('email'))
        except ObjectDoesNotExist as err:
            raise serializers.ValidationError({"email": "No such Email."})
        return data

    def update(self, inst, data):
        self.user = User.objects.filter(email=data.get('email')).first()
        pwd_hash = self.__gethash()
        self.__updateHash(self.user, pwd_hash)
        email_tpl = get_template("email/reset_password.txt")
        email_body = email_tpl.render(Context({"hash": pwd_hash.hexdigest(), 'domain': settings.DOMAIN}))
        send_mail("Reset password", email_body, settings.EMAIL_HOST_USER, (self.user.email, ))
        return inst

    def __gethash(self):
        hashing_string = "Yellow_%s%s_reset" % (self.user.email, datetime.now().strftime('%s'))
        uniq_hash = hashlib.sha256()
        uniq_hash.update(hashing_string.encode('utf-8'))
        return uniq_hash

    def __updateHash(self, user, pwd_hash):
        try:
            hash_model = ResetPassword.objects.get(user=user)
            hash_model.pwd_hash = pwd_hash.hexdigest()
        except MultipleObjectsReturned as err:
            ResetPassword.objects.filter(user=user).delete()
            hash_model = ResetPassword(pwd_hash=pwd_hash.hexdigest(), user=user)
        except ObjectDoesNotExist as err:
            hash_model = ResetPassword(pwd_hash=pwd_hash.hexdigest(), user=user)
        hash_model.save();

    class Meta:
        model = User
        fields = ['email']

class UpdatePasswordSerializer(serializers.Serializer):
    password = serializers.CharField()
    retape_password = serializers.CharField(allow_blank=False)
    reset_hash = serializers.CharField(allow_blank=False)

    def validate(self, data):
        if data.get('password') != data.get('retape_password'):
            raise serializers.ValidationError({'retape_password': 'The passwords must match.'})
        try:
            reset_hash = ResetPassword.objects.get(pwd_hash=data.get('reset_hash'))
        except Exception as err:
            raise serializers.ValidationError({'reset_hash': 'Incorrect or corrupted hash summ.'})
        # del data['retape_password']
        # del data['reset_hash']
        return data

    def update(self, inst, data):
        hash_inst = ResetPassword.objects.filter(pwd_hash=data.get('reset_hash')).first()
        hash_inst.user.set_password(data.get('password'))
        hash_inst.user.save()
        hash_inst.delete()
