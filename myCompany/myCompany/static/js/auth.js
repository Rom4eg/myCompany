
import './../sass/auth.sass';

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import { Auth } from './../components/user/auth.jsx';

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/login/" component={Auth} />
  </Router>
), document.getElementById('auth'))
