from django.utils.translation import ugettext as _
from django.contrib.auth.models import User
from django.db import models

class Rule(models.Model):

    title = models.CharField(_("Title"), max_length=255)
    content = models.TextField(_('Rule content'))
    reviewed = models.ManyToManyField(User, verbose_name=_("User"), related_name="rules", blank=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, verbose_name=_("Author"), related_name="user_rule", null=True)
    create_date = models.DateTimeField(auto_now_add=True, verbose_name=_("Create date"))

    def __str__(self):
        return "%s (author: %s)" % (self.title, self.author)
