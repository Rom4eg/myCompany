import events.views as views
from django.conf.urls import url

urlpatterns = [
    url(r'list/$', views.EventsList.as_view(), name="home"),
    url(r'(?P<event_id>\d+)/$', views.EventDetail.as_view(), name="event_detail"),
]
