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

    def update(self, inst, data):
        self.user = User.objects.filter(email=data.get('email'))[1]
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
