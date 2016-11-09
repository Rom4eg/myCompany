
from django.contrib.auth.models import User
from django.db import models
from django.utils.translation import ugettext as _

from department import Department

class Employee(models.Model):

    email = models.EmailField(_("Email"))
    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name=_("User"))
    department = models.ForeignKey(Department, verbose_name=_("Department"))
