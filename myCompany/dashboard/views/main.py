from django.views.generic import View
from django.http.response import HttpResponse

class DashoardGeneral(View):

    def get(self, request):
        return HttpResponse("Dashboard")
