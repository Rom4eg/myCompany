from django.views.generic import TemplateView

class Dashboard(TemplateView):

    template_name = "web/dashboard.html"
