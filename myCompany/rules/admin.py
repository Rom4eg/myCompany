from django.contrib import admin
from rules.models import Rule

class RuleAdmin(admin.ModelAdmin):
    pass

admin.site.register(Rule, RuleAdmin)
