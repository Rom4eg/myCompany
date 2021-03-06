from django.db import models
from django.utils.translation import ugettext as _

class Company(models.Model):
    name = models.CharField(_("Name"), max_length=255)

    def __str__(self):
        return "%s" % (self.name)
