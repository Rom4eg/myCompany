from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from events.models import Event
from events.serializers import EventSerializer
from rest_framework.response import Response

class EventDetail(APIView):

    def get(self, request, event_id):
        event = get_object_or_404(Event.objects.all(), pk=event_id)
        serialized = EventSerializer(event)
        return Response(serialized.data)
