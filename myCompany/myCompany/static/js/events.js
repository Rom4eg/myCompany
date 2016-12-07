
import "./../sass/events.sass";
import { BaseController } from './base.js';
import { Router, Route, browserHistory } from 'react-router';
import {EventsListContainer} from './../components/events/list.jsx';
import {EventItem} from './../components/events/detail.jsx';
import React from 'react';
import ReactDom from 'react-dom';

class EventsController extends BaseController{

    init(){
        super.init();
    }
}

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/events/" component={EventsListContainer} />
    <Route path="/events/:id/" component={EventItem} />
  </Router>
), document.getElementById('events'))

var ctrl = new EventsController();
