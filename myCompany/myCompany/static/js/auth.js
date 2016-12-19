
import './../sass/auth.sass';

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import { Auth } from './../components/user/auth.jsx';
import { Registration } from './../components/user/register.jsx';

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/login/" component={Auth} />
    <Route path="/register/" component={Registration} />
  </Router>
), document.getElementById('auth'))