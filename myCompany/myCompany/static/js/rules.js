
import "../sass/rules.sass";
import { BaseController } from './base.js';
import { Router, Route, browserHistory } from 'react-router';
import { RulesListContainer } from './../components/rules/list.jsx';
import { RuleItem } from './../components/rules/detail.jsx';
import React from 'react';
import ReactDom from 'react-dom';

class RulesController extends BaseController{

    init(){
        super.init();
    }
}

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/rules/" component={RulesListContainer} />
    <Route path="/rules/:id/" component={RuleItem} />
  </Router>
), document.getElementById('rules'))

var ctrl = new RulesController();
