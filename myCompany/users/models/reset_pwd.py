from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User

class ResetPassword(models.Model):

    create_date = models.DateField(verbose_name=_('Create date'), auto_now=True)
    pwd_hash = models.TextField(verbose_name=_('Hash'))
    user = models.OneToOneField(User, verbose_name=_('User'), unique=True)

    def __unicode__(self):
        return "%s - %s" % user.email, create_date
