from rest_framework import serializers

class DashboardSerializer(serializers.Serializer):

    title = serializers.CharField()
    date = serializers.DateTimeField()
    content = serializers.CharField()
    url = serializers.CharField()
    author = serializers.CharField()
