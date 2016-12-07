from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.exceptions import NotFound
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
from rules.models import Rule
from rules.serializers import RulesListSerializer, RulesSerializer

class RulesViewSet(ViewSet):

    queryset = Rule.objects.all()[:20]

    def list(self, request):
        rules = Rule.objects.all()[:20]
        if not rules:
            raise NotFound
        serialized = RulesListSerializer(rules, many=True)
        return Response(serialized.data)

    def retrieve(self, request, pk):
        try:
            rule = Rule.objects.get(pk=pk)
        except ObjectDoesNotExist as err:
            raise NotFound
        except MultipleObjectsReturned as err:
            rule = Rule.objects.filter(pk=pk).first()
        serialized = RulesSerializer(rule)
        return Response(serialized.data)
