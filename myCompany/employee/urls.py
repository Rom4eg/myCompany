import employee.views as views
from django.conf.urls import url, include
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register(r"employee", views.EmployeeViewSet)

urlpatterns = [
    url(r'^', include(router.urls))
]
