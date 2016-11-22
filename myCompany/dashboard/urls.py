import dashboard.views as views
from django.conf.urls import url

urlpatterns = [
    url(r'list/$', views.DashboardGeneral.as_view(), name="list"),
]
