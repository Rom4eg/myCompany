from rest_framework.views import APIView

class Registration(APIView):

    def post(self, request):
        print(request.data)
