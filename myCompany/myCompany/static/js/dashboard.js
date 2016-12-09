
import "../sass/dashboard.sass";
import { BaseController } from './base.js';
import Dashboard from '../components/dashboard/dashboard.jsx';

class DashboardController extends BaseController{

    init(){
        super.init();
    }
}

var ctrl = new DashboardController();
