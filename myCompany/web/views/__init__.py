from web.views.home import Dashboard
from web.views.rules import Rules
from web.views.events import EventsList
from web.views.events import EventsDetail
from web.views.employees import Employees
from web.views.common import ApiScheme
from web.views.auth import Login
from web.views.auth import Registration
from web.views.auth import ResetPwd

__all__ = ['Dashboard', 'Rules', 'EventsList', 'Employees', 'ApiScheme', 'Login'
            'Registration', 'ResetPwd']
