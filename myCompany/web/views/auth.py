from django.views.generic import TemplateView
from django.shortcuts import render_to_response
from django.core.exceptions import ObjectDoesNotExist
from users.models import ResetPassword


class Login(TemplateView):

    template_name = "users/auth.html"

class Registration(TemplateView):

    template_name = "users/auth.html"

class ResetPwd(TemplateView):

    template_name = "users/auth.html"

    def get(self, request, reset_hash=None):
        if not reset_hash:
            return super(ResetPassword, self).get(request)
        try:
            pwd_hash = ResetPassword.objects.get(pwd_hash=reset_hash)
        except ObjectDoesNotExist as err:
            return super(ResetPassword, self).get(request)
        return render_to_response("users/update_pwd.html", {"request": request, "user": pwd_hash.user})

    def put(self, request):
        pass
