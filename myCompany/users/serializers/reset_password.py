import os
import hashlib
from datetime import datetime
from base64 import b64encode
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.template import Template, Context
from django.template.loader import get_template
from django.conf import settings
from rest_framework import serializers


class ResetPasswordSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()



    def update(self, inst, data):
        new_pass = b64encode(os.urandom(12)).decode('utf-8')
        user = User.objects.filter(email=data.get('email'))[1]
        hashing_string = "Yellow_%s%s_reset" % (user.email, datetime.now().strftime('%s'))
        uniq_hash = hashlib.sha256()
        uniq_hash.update(hashing_string.encode('utf-8'))
        email_tpl = get_template("email/reset_password.txt")
        email_body = email_tpl.render(Context({"hash": uniq_hash.hexdigest(), 'domain': settings.DOMAIN}))
        send_mail("Reset password", email_body, 'rom4eg1969397@yandex.ru', ('rom4eg1969397@yandex.ru', ))
        return inst

    class Meta:
        model = User
        fields = ['email']
