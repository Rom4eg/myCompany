import web.views as views
from django.conf.urls import url

urlpatterns = [
    url(r'^$', views.Dashboard.as_view(), name="dashboard"),
    url(r'^rules/$', views.Rules.as_view(), name="rules"),
    url(r'^events/$', views.Events.as_view(), name="events"),
    url(r'^employee/$', views.Employees.as_view(), name="employee"),
]
