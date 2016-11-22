from rest_framework import generics
from employee.models import Employee
from employee.serializers import EmployeeListSerializer

class EmployeeList(generics.ListAPIView):

    queryset = Employee.objects.all()[:20]
    serializer_class = EmployeeListSerializer
