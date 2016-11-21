import dashboard.views as views
from django.conf.urls import url

urlpatterns = [
    url(r'$', views.DashboardGeneral.as_view(), name="home"),
]
