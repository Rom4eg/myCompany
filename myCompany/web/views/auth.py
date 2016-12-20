from django.views.generic import TemplateView

class Login(TemplateView):

    template_name = "users/auth.html"

class Registration(TemplateView):

    template_name = "users/auth.html"
