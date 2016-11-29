from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
class AuthBackend(object):

    def __init__(self):
        self.user_model = get_user_model()

    def authenticate(self, username=None, password=None):
        if not username:
            return None
        try:
            user = self.user_model.objects.get(username=username)
        except ObjectDoesNotExist:
            return None
        if user.check_password(password):
                return user
        return None

    def get_user(self, uid):
        return self.user_model.objects.get(pk=uid)
