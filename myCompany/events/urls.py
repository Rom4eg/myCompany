import events.views as views
from django.conf.urls import url, include
from rest_framework.routers import SimpleRouter
from rest_framework_nested import routers

router = SimpleRouter()
router.register(r'events', views.EventsViewSet)

comment_router = routers.NestedSimpleRouter(router, 'events', lookup='event')
comment_router.register(r'comments', views.CommentsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^', include(comment_router.urls))
]
