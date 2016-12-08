import "../sass/employees.sass";
import { BaseController } from './base.js';
import {Router, Route, browserHistory} from 'react-router';
import { EmployeeListContainer } from './../components/employees/list.jsx';
import { EmployeeItem } from './../components/employees/detail.jsx';
import React from 'react';
import ReactDom from 'react-dom';

class EmployeeController extends BaseController{

    init(){
        super.init();
    }
}
var ctrl = new EmployeeController();
ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/employee/" component={EmployeeListContainer} />
    <Route path="/employee/:id/" component={EmployeeItem} />
  </Router>
), document.getElementById('employees'))
