import datetime
from dashboard.mixins import DashboardMixin

class DashboardContainer(object):

    title = ""
    date = None
    content = ""

    def __init__(self, title, content, date):
        self.title = title
        self.content = content
        self.date = date or datetime.datetime.now()

class DashboardObjectContainer(DashboardContainer):

    def __init__(self, *args, **kwargs):
        obj = None
        if len(args):
            obj = args[0]
        if isinstance(obj, object):
            orig_object = obj.get_edited_object()
            if isinstance(orig_object, DashboardMixin):
                self.title = orig_object.getTitle()
                self.content = orig_object.getContent()
                self.date = obj.action_time
                self.author = obj.user
                self.action = obj.action_flag
