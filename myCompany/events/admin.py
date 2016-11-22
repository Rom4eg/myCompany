from django.contrib import admin
from events.models import Event, Comment

class EventAdmin(admin.ModelAdmin):
    pass

class CommentAdmin(admin.ModelAdmin):
    pass

admin.site.register(Event, EventAdmin)
admin.site.register(Comment, CommentAdmin)
