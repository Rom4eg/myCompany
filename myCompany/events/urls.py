import events.views as views
from django.conf.urls import url
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'events', views.EventsViewSet)

urlpatterns = router.urls
