
import "../sass/home.sass";
import { BaseController } from './base.js';
import HomeComponent from '../components/home/home.jsx';

class HomeController extends BaseController{

    init(){
        super.init();
    }
}

var ctrl = new HomeController();
