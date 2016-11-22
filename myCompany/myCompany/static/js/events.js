
import "../sass/events.sass";
import { BaseController } from './base.js';
import EventsList from '../components/events/events.jsx';

class EventsController extends BaseController{

    init(){
        super.init();
    }
}

var ctrl = new EventsController();
