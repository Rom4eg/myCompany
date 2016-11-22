from rest_framework import generics
from events.models import Event
from events.serializers import EventListSerializer

class EventsList(generics.ListAPIView):

    queryset = Event.objects.all()[:20]
    serializer_class = EventListSerializer
