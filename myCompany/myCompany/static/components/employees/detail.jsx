import React from 'react';
import ReactDom from 'react-dom';

export class EmployeeItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {items:{}}
  }

  componentDidMount(){
    $.ajax({
      url: "/employee/"+this.props.params.id+"/"
    }).done((resp)=>{
      this.setState({
        item: resp
      })
    })
  }

  render(){
    return (
      <div>
        <div className="avatar">
          <img src="" alt=""/>
        </div>
        <div className="info">
          <div className="full-name">
            {this.state.item.first_name}
            {this.state.item.middle_name}
            {this.state.item.last_name}
          </div>
          <div className="department">
            {this.state.item.department}
          </div>
          <div className="company">
            {this.state.item.company}
          </div>
          <div className="position">
            2323
          </div>
        </div>
      </div>
    )
  }
}
