from django.views.generic import TemplateView

class Login(TemplateView):

    template_name = "users/auth.html"

class Registration(TemplateView):

    template_name = "users/auth.html"

class ResetPassword(TemplateView):

    template_name = "users/auth.html"

    def get(self, request):
        print(request)
        return super(ResetPassword, self).get(request)
