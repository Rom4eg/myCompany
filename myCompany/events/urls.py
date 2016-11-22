import events.views as views
from django.conf.urls import url

urlpatterns = [
    url(r'list/$', views.EventsList.as_view(), name="home"),
]
