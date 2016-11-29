from django.views.generic import TemplateView

class EventsList(TemplateView):

    template_name = "web/events/list.html"
