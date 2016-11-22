from django.views.generic import TemplateView

class Employees(TemplateView):

    template_name = "web/employees.html"
