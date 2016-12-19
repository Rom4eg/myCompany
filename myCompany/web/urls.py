import web.views as views
from django.conf.urls import url

urlpatterns = [
    url(r'^$', views.Dashboard.as_view(), name="dashboard"),

    url(r'^rules/$', views.Rules.as_view(), name="rules_list"),
    url(r'^rules/(?P<record_id>\d+)/$', views.Rules.as_view(), name="rules_detail"),

    url(r'^events/$', views.EventsList.as_view(), name="events_list"),
    url(r'^events/(?P<record_id>\d+)/$', views.EventsDetail.as_view(), name="events_detail"),

    url(r'^employee/$', views.Employees.as_view(), name="employee_list"),
    url(r'^employee/(?P<record_id>\d+)/$', views.Employees.as_view(), name="employee_detail"),

    url(r'^login/$', views.Login.as_view(), name="employee_list"),
]
