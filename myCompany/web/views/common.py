from rest_framework.views import APIView
from rest_framework import renderers, schemas, response

class ApiScheme(APIView):

    generator = schemas.SchemaGenerator(title='Bookings API')
    renderer_classes = [renderers.CoreJSONRenderer, ]

    def options(self, request):
        schema = self.generator.get_schema(request)
        return response.Response(schema)
