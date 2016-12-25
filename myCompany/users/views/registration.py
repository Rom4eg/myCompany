from django.contrib.auth import login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from users.serializers import RegistrationSerializer

class Registration(APIView):

    serializer_classes = RegistrationSerializer

    def post(self, request):
        reg_data = RegistrationSerializer(data=request.data)
        if not reg_data.is_valid():
            return Response(reg_data.errors, status=status.HTTP_400_BAD_REQUEST)
        user = reg_data.save()
        login(request, user)
        return Response({}, status=status.HTTP_201_CREATED)
