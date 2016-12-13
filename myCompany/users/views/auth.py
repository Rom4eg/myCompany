
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer

class Login(APIView):

    template_name = "users/login.html"
    renderer_classes = (TemplateHTMLRenderer, JSONRenderer)

    def post(self, request):
        pass
