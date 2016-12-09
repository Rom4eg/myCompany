import datetime
from dashboard.mixins import DashboardMixin

class DashboardContainer(object):

    title = ""
    date = None
    content = ""
    url = "";
    author = ""

    def __init__(self, title, content, date, url, author):
        self.title = title
        self.content = content
        self.date = date
        self.url = url
        self.author = author
