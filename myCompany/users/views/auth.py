from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from users.serializers import ResetPasswordSerializer

class Login(APIView):

    def post(self, request):
        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)
        if(user):
            login(request, user)
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_401_UNAUTHORIZED)

class ResetPassword(APIView):

    serializer_classes = ResetPasswordSerializer
    permission_classes = (AllowAny, )

    def put(self, request):
        serializer = ResetPasswordSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.update(serializer, serializer.data)
        return Response({}, status=status.HTTP_202_ACCEPTED)
