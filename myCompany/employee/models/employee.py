from django.contrib.auth.models import User
from django.db import models
from django.utils.translation import ugettext as _

from employee.models import Department
from employee.models import Company
from dashboard.mixins import DashboardMixin

class Employee(models.Model, DashboardMixin):

    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name=_("User"), related_name="employee")
    department = models.ForeignKey(Department, verbose_name=_("Department"))
    company = models.ForeignKey(Company, verbose_name=_("Company"))
    first_name = models.CharField(_("First Name"), max_length=255)
    last_name = models.CharField(_("Last Name"), max_length=255)
    middle_name = models.CharField(_("Middle Name"), max_length=255)
    phone_main = models.CharField(_("Phone primary"), max_length=30, null=True, blank=True)
    phone_second = models.CharField(_("Phone secondary"), max_length=30, null=True, blank=True)

    def __str__(self):
        return "%s \"%s\" %s" % (self.first_name, self.middle_name, self.last_name)

    def getTitle(self):
        return _("We have a new Employee")

    def getContent(self):
        return _("We have a new employee, %s" % (self.user.get_full_name()))
