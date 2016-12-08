# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-08 16:26
from __future__ import unicode_literals

from django.db import migrations, models
import employee.models.employee


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0005_auto_20161208_1535'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='avatar',
            field=models.FileField(blank=True, default='default.png', null=True, upload_to=employee.models.employee.avatar_location, verbose_name='User icon'),
        ),
    ]
