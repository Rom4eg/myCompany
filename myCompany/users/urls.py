import users.views as views
from django.conf.urls import url


urlpatterns = [
    url(r'current-user-info/$', views.CurrentUserInfo.as_view(), name="current-user-info"),
]
