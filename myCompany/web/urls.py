import web.views as views
from django.conf.urls import url

urlpatterns = [
    url(r'^$', views.Dashboard.as_view(), name="dashboard"),
    url(r'^rules/$', views.Rules.as_view(), name="rules"),
]
