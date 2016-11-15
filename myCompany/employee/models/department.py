from django.db import models
from django.utils.translation import ugettext as _

from employee.models import Company

class Department(models.Model):
    name = models.CharField(_("Name"), max_length=255)
    company = models.ForeignKey(Company)
