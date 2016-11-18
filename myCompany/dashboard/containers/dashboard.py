import datetime

class DashboardContainer(object):

    title = ""
    date = None
    content = ""

    def __init__(self, title, content, date=None):
        self.title = title
        self.content = content
        self.date = date or datetime.datetime.now()
