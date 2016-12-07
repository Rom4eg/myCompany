import "../../sass/partials/__employee_shield.sass";
import React from 'react';

export default class EmployeeShild extends React.Component{

  render(){
    return (
      <div className="employee-shild">
        <a href={"/employee/"+this.props.data.id+"/"}>
          <div className="name">
            {this.props.data.first_name} {this.props.data.last_name}
          </div>
        </a>
      </div>
    )
  }
}
