"""myCompany URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url, include
from django.views.i18n import JavaScriptCatalog
from django.contrib import admin
from web.views import ApiScheme

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', include('web.urls')),
    url(r'^jsi18n/$', JavaScriptCatalog.as_view(), name='javascript-catalog'),
    url(r'^tinymce/', include('tinymce.urls')),
    url(r'^api/$', ApiScheme.as_view(), name="menu_list"),
    url(r'^api/', include('dashboard.urls')),
    url(r'^api/', include('rules.urls')),
    url(r'^api/', include('events.urls')),
    url(r'^api/', include('employee.urls')),
    url(r'^api/', include('users.urls')),
    url(r'', include('django.contrib.auth.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
