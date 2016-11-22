import rules.views as views
from django.conf.urls import url

urlpatterns = [
    url(r'list/$', views.RulesList.as_view(), name="home"),
]
