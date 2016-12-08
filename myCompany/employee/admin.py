
import os
from django.contrib import admin
from django import forms
from employee.models import Company, Department, Employee
from django.core.files import File
from django.conf import settings

class CompanyAdmin(admin.ModelAdmin):
    pass

class DepartmentAdmin(admin.ModelAdmin):
    pass


class EmployeeForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = '__all__'

    def clean(self):
        if 'avatar' in self.changed_data and self.cleaned_data.get('avatar'):
            new_img = self.cleaned_data.get('avatar')
            old_img = self.instance.avatar.name
            self.remove_old_avatar(old_img)
        if not self.cleaned_data.get('avatar'):
            default = Employee._meta.get_field('avatar').get_default()
            old_img = self.instance.avatar.name
            self.remove_old_avatar(old_img)
            self.update_avatar(default)
        return self.cleaned_data

    def remove_old_avatar(self, old_img_name):
        img_storage = self.instance.avatar.storage
        file_path = os.path.join(settings.MEDIA_ROOT, old_img_name)
        if 'media/user_' in file_path:
            img_storage.delete(file_path)

    def update_avatar(self, new_img_name, file_obj=None):
        f = file_obj
        fstream = None
        if not file_obj:
            new_path = os.path.join(settings.MEDIA_ROOT, new_img_name)
            fstream = open(new_path, 'rb')
            f = File(fstream)
        self.instance.avatar.save(new_img_name, f, True)
        if fstream:
            fstream.close()

class EmployeeAdmin(admin.ModelAdmin):
    form = EmployeeForm

admin.site.register(Company, CompanyAdmin)
admin.site.register(Department, DepartmentAdmin)
admin.site.register(Employee, EmployeeAdmin)
