from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse

class Dashboard(LoginRequiredMixin, TemplateView):

    template_name = "web/dashboard.html"
    login_url = 'login'
