from rest_framework import serializers

class DashboardSerializer(serializers.Serializer):

    title = serializers.CharField()
    date = serializers.DateTimeField()
    content = serializers.CharField()
