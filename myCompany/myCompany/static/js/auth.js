
import './../sass/auth.sass';

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import { Auth } from './../components/user/auth.jsx';
import { Registration } from './../components/user/register.jsx';
import { ResetPassword } from './../components/user/reset_password.jsx';
import { UpdatePassword } from './../components/user/update_password.jsx';

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/login/" component={Auth} />
    <Route path="/register/" component={Registration} />
    <Route path="/reset-password/" component={ResetPassword} />
    <Route path="/reset-confirm/:hash/" component={UpdatePassword} />
  </Router>
), document.getElementById('auth'))
