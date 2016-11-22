import employee.views as views
from django.conf.urls import url

urlpatterns = [
    url(r'list/$', views.EmployeeList.as_view(), name="home"),
]
