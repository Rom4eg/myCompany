from django.utils.translation import ugettext as _
from django.utils.text import Truncator
from django.db import models
from django.urls import reverse
from tinymce.models import HTMLField
from dashboard.mixins import DashboardMixin
from employee.models import Employee

class Event(models.Model, DashboardMixin):


    title = models.CharField(_("Title"), max_length=255)
    content = HTMLField(_('Event content'))
    subscribers = models.ManyToManyField(Employee, verbose_name=_("Subscribers"), related_name="subscribed_to", blank=True)
    author = models.ForeignKey(Employee, on_delete=models.SET_NULL, verbose_name=_("Author"), related_name="user_events", null=True)
    create_date = models.DateTimeField(auto_now_add=True, verbose_name=_("Create date"))
    start_date = models.DateTimeField(auto_now_add=True, verbose_name=_("Start date"))
    end_date = models.DateTimeField(auto_now_add=True, verbose_name=_("End date"))

    def __str__(self):
        return "%s (author: %s)" % (self.title, self.author)

    def __int__(self):
        return self.pk

    def getTitle(self):
        return self.title

    def getContent(self):
        return self.content_preview

    def get_absolute_url(self):
        return reverse('events_detail', args=[str(self.pk)])

    @property
    def content_preview(self):
        return Truncator(self.content).words(70, html=True)
