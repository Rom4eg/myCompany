import users.views as views
from django.conf.urls import url


urlpatterns = [
    url(r'current-user-info/$', views.CurrentUserInfo.as_view(), name="current-user-info"),
    url(r'login/$', views.Login.as_view(), name="login"),
    url(r'register/$', views.Registration.as_view(), name="register"),
    url(r'reset-password/$', views.ResetPassword.as_view(), name="reset_password"),
    url(r'reset-confirm/$', views.ResetPassword.as_view(), name="reset_confirm"),
]
