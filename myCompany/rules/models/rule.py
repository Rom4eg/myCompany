from django.utils.translation import ugettext as _
from django.db import models
from django.utils.text import Truncator
from tinymce.models import HTMLField
from dashboard.mixins import DashboardMixin
from employee.models import Employee

class Rule(models.Model, DashboardMixin):


    title = models.CharField(_("Title"), max_length=255)
    content = HTMLField(_('Rule content'))
    reviewed = models.ManyToManyField(Employee, verbose_name=_("User"), related_name="rules", blank=True)
    author = models.ForeignKey(Employee, on_delete=models.SET_NULL, verbose_name=_("Author"), related_name="user_rule", null=True)
    create_date = models.DateTimeField(auto_now_add=True, verbose_name=_("Create date"))

    def __str__(self):
        return "%s (author: %s)" % (self.title, self.author)

    def getTitle(self):
        return self.title

    def getContent(self):
        return self.content

    def getAuthor(self):
        return self.author

    @property
    def content_preview(self):
        return Truncator(self.content).words(30, html=True)

    class Meta:
        ordering = ["-create_date"]
