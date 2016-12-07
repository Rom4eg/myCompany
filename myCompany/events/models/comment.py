from django.utils.translation import ugettext as _
from django.db import models
from employee.models import Employee

from events.models import Event

class Comment(models.Model):

    author = models.ForeignKey(Employee, on_delete=models.SET_NULL, verbose_name=_("Author"), related_name="comments", null=True)
    comment = models.TextField(verbose_name=_("Comment"))
    event = models.ForeignKey(Event, on_delete=models.CASCADE, verbose_name=_("Event"), related_name="comments")
    create_date = models.DateTimeField(auto_now_add=True, verbose_name=_("Create date"))

    def __str__(self):
        return "%s (author: %s)" % (self.event, self.author)
