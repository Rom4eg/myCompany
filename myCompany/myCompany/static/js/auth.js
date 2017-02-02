
import './../sass/auth.sass';

import "foundation-sites/dist/plugins/foundation.core";
import "foundation-sites/dist/plugins/foundation.abide";

import React from 'react';
import ReactDom from 'react-dom';
import { BaseController } from './base.js';
import {Router, Route, browserHistory} from 'react-router';
import { Auth } from './../components/user/auth.jsx';
import { Registration } from './../components/user/register.jsx';
import { ResetPassword } from './../components/user/reset_password.jsx';
import { UpdatePassword } from './../components/user/update_password.jsx';

class AuthController extends BaseController{

  constructor(){
    super();
    console.log($("#auth form"));
    var elem = new Foundation.Abide($("#auth form"));
  }
}

var ctrl = new AuthController();

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/login/" component={Auth} />
    <Route path="/register/" component={Registration} />
    <Route path="/reset-password/" component={ResetPassword} />
    <Route path="/reset-confirm/:hash/" component={UpdatePassword} />
  </Router>
), document.getElementById('auth'))
