from django.views.generic import TemplateView
from django.shortcuts import render_to_response
from django.core.exceptions import ObjectDoesNotExist
from django.http.response import HttpResponseRedirect
from django.urls import reverse
from users.models import ResetPassword


class Login(TemplateView):

    template_name = "users/auth.html"

class Registration(TemplateView):

    template_name = "users/auth.html"

class ResetPwd(TemplateView):

    template_name = "users/auth.html"

    def get(self, request, reset_hash=None):
        if not reset_hash:
            return super(ResetPwd, self).get(request)
        try:
            pwd_hash = ResetPassword.objects.get(pwd_hash=reset_hash)
            self.template_name = "users/update_pwd.html"
        except ObjectDoesNotExist as err:
            return HttpResponseRedirect(reverse('reset_password_view'))
        return render_to_response(self.template_name, {"request": request, "user": pwd_hash.user})
