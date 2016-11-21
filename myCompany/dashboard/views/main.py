from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from django.contrib.admin.models import LogEntry

from dashboard.containers import DashboardObjectContainer
from dashboard.serializers import DashboardSerializer


class DashboardGeneral(generics.ListAPIView):

    def get(self, request):
        entryies = list(LogEntry.objects.all()[:10])
        containers = []
        for entry in entryies:
            containers.append(DashboardObjectContainer(entry))
        return Response(DashboardSerializer(containers, many=True).data)
