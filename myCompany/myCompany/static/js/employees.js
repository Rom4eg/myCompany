
import "../sass/employees.sass";
import { BaseController } from './base.js';
import EmployeeList from '../components/employees/employees.jsx';

class EmployeeController extends BaseController{

    init(){
        super.init();
    }
}

var ctrl = new EmployeeController();
