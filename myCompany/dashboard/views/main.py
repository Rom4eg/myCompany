from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.admin.models import LogEntry
from django.urls import reverse
from dashboard.mixins import DashboardMixin
from dashboard.containers import DashboardContainer
from dashboard.serializers import DashboardSerializer


class DashboardViewSet(ViewSet, LoginRequiredMixin):

    login_url = '/login/'

    permission_classes = (IsAuthenticated, )
    queryset = LogEntry.objects.all()[:20]

    def list(self, request):
        container = []
        for entry in self._log_iterator():
            obj = entry.get_edited_object()
            title = obj.getTitle()
            content = obj.getContent()
            date = obj.create_date
            url = obj.get_absolute_url()
            author = str(entry.user.employee)
            container.append(DashboardContainer(title, content, date, url, author))
        return Response(DashboardSerializer(container, many=True).data)

    def _log_iterator(self):
        objects = [cls.__name__.lower() for cls in DashboardMixin.__subclasses__()]
        entryies = LogEntry.objects.filter(action_flag=1, content_type__model__in=objects)[:20]
        for entry in entryies:
            yield entry
