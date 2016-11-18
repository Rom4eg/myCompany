from rest_framework.views import APIView
from rest_framework.response import Response

from dashboard.containers import DashboardContainer
from dashboard.serializers import DashboardSerializer

class DashoardGeneral(APIView):

    def get(self, request):
        dashboard = DashboardContainer('Some Title', 'This is a content')
        serializer = DashboardSerializer(dashboard)
        return Response(serializer.data)
