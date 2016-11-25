
import "../sass/events/events_list.sass";
import { BaseController } from './base.js';
import EventsList from '../components/events/list.jsx';

class EventsListController extends BaseController{

    init(){
        super.init();
    }
}

var ctrl = new EventsListController();
