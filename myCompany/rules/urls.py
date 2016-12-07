import rules.views as views
from django.conf.urls import url, include
from rest_framework.routers import SimpleRouter
from rest_framework_nested import routers

router = SimpleRouter()
router.register(r'rules', views.RulesViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
