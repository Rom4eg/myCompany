
class DashboardMixin(object):

    def getTitle(self):
        raise NotImplementedError("You must override this method in a child class.")

    def getContent(self):
        raise NotImplementedError("You must override this method in a child class.")
