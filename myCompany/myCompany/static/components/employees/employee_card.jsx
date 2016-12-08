import "./../../sass/partials/__employee_card.sass";
import React from 'react';
import ReactDom from 'react-dom';

export class EmployeeShildLarge extends React.Component{

  render(){
    return (
      <div className="card">
        <div className="wrapper">
          <div className="avatar">
            <img src="" alt=""/>
          </div>
          <div className="name">
            <div className="first_name">{this.props.data.first_name}</div>
            <div className="middle_name">{this.props.data.middle_name}</div>
            <div className="last_name">{this.props.data.last_name}</div>
          </div>
          <div className="department">{this.props.data.department}</div>
          <div className="email">{this.props.data.email}</div>
          <div className="phone">{this.props.data.phone}</div>
        </div>
      </div>
    )
  }
}
