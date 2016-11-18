from django.contrib.auth.models import User
from django.db import models
from django.utils.translation import ugettext as _

from employee.models import Department

class Employee(models.Model):

    email = models.EmailField(_("Email"))
    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name=_("User"), related_name="employee")
    department = models.ForeignKey(Department, verbose_name=_("Department"))
    first_name = models.CharField(_("First Name"), max_length=255)
    last_name = models.CharField(_("Last Name"), max_length=255)
    middle_name = models.CharField(_("Middle Name"), max_length=255)

    def __str__(self):
        return "%s \"%s\" %s" % (self.first_name, self.middle_name, self.last_name)
