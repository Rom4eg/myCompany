from django.db import models
from django.utils.translation import ugettext as _

class Company(models.Model):
    name = models.CharField(_("Name"))
