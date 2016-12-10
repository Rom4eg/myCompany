from rest_framework.viewsets import ModelViewSet
from events.models import Comment
from events.serializers import CommentSerializer
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

class CommentsViewSet(ModelViewSet):

    queryset = Comment.objects.all()[:20]
    serializer_class = CommentSerializer
    
    def list(self, request, event_pk):
        comments = Comment.objects.filter(event__pk=event_pk)[:20]
        serialized = CommentSerializer(comments, many=True)
        return Response(serialized.data)

    def retrieve(self, request, pk, event_pk):
        comment = Comment.objects.filter(pk=pk, event__pk=event_pk).first()
        if not comment:
            raise NotFound
        serialized = CommentSerializer(comment)
        return Response(serialized.data)
