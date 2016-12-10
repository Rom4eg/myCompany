from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import AnonymousUser
from users.serializers import UserSerializer

class CurrentUserInfo(APIView):

    def get(self, request):
        user = request.user
        serialized = UserSerializer()
        if not isinstance(user, AnonymousUser):
            serialized = UserSerializer(user)
        return Response(serialized.data)
