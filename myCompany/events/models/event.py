from django.utils.translation import ugettext as _
from django.contrib.auth.models import User
from django.db import models
from tinymce.models import HTMLField
from dashboard.mixins import DashboardMixin

class Event(models.Model, DashboardMixin):


    title = models.CharField(_("Title"), max_length=255)
    content = HTMLField(_('Event content'))
    subscribers = models.ManyToManyField(User, verbose_name=_("Subscribers"), related_name="subscribed_to", blank=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, verbose_name=_("Author"), related_name="user_events", null=True)
    create_date = models.DateTimeField(auto_now_add=True, verbose_name=_("Create date"))
    start_date = models.DateTimeField(auto_now_add=True, verbose_name=_("Start date"))
    end_date = models.DateTimeField(auto_now_add=True, verbose_name=_("End date"))

    def __str__(self):
        return "%s (author: %s)" % (self.title, self.author)

    def getTitle(self):
        return self.title

    def getContent(self):
        return self.content

    def getAuthor(self):
        return self.author
