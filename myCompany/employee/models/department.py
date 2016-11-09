from django.db import models
from django.utils.translation import ugettext as _

from company import Company

class Department(models.Model):
    name = models.CharField(_("Name"))
    company = models.ForeignKey(Company)
