from django.views.generic import TemplateView

class EventsList(TemplateView):

    template_name = "web/events.html"

class EventsDetail(TemplateView):

    template_name = "web/events.html"
