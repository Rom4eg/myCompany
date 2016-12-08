from rest_framework.viewsets import ViewSet
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from employee.models import Employee
from employee.serializers import EmployeeListSerializer
from employee.serializers import EmployeeSerializer

class EmployeeViewSet(ViewSet):

    queryset = Employee.objects.all()[:20]

    def list(self, request):
        items = Employee.objects.all()[:20]
        serialized = EmployeeListSerializer(items, many=True)
        return Response(serialized.data)

    def retrieve(self, request, pk):
        try:
            item = Employee.objects.get(pk=pk)
        except ObjectDoesNotExist as err:
            raise NotFound
        except MultipleObjectsReturned as err:
            item = Employee.objects.filter(pk=pk)[:1]
        serialized = EmployeeSerializer(item)
        return Response(serialized.data)
