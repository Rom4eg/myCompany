import web.views as views
from django.conf.urls import url

urlpatterns = [
    url(r'^', views.Home.as_view(), name="home"),
]
