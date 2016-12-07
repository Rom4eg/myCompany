from events.models import Event
from events.serializers import EventSerializer, EventListSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
from rest_framework.exceptions import NotFound

class EventsViewSet(ModelViewSet):

    queryset = Event.objects.all()[:20]

    def list(self, request):
        items = Event.objects.all()[:20]
        serialized = EventListSerializer(items, many=True)
        return Response(serialized.data)

    def retrieve(self, request, pk):
        try:
            item = Event.objects.get(pk=pk)
        except ObjectDoesNotExist as err:
            raise NotFound
        except MultipleObjectsReturned as err:
            item = Event.objects.filter(pk=pk)[:1]
        serialized = EventSerializer(item)
        return Response(serialized.data)
