from rest_framework.response import Response
from rest_framework import generics
from rules.models import Rule
from rules.serializers import RulesListSerializer

class RulesList(generics.ListAPIView):

    queryset = Rule.objects.all()[:20]
    serializer_class = RulesListSerializer
