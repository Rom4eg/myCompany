import React from 'react';
import ReactDom from 'react-dom';

class EmployeeListItem extends React.Component{

  constructor(props){
      super(props);
  }

  render(){
    return (
      <div>
        <div className="first_name">{this.props.data.first_name}</div>
        <div className="middle_name">{this.props.data.middle_name}</div>
        <div className="last_name">{this.props.data.last_name}</div>
        <div className="department">{this.props.data.department}</div>
        <div className="email">{this.props.data.email}</div>
      </div>)
  }
}

class EmployeeListContainer extends React.Component{

  constructor(props){
      super(props);
      this.state = {items:[]};
      $.ajax({
          url: '/api/employee/list/',

      }).then((resp)=>{
          this.setState({items: resp});
      });
  }

  render(){
    return (
      <div className="small-12 medium-10 medium-offset-1 large-8 large-offset-2 columns">
        {this.state.items.map((el, i)=>{
          return <EmployeeListItem data={el} key={i}/>
        })}
      </div>)
  }
}

ReactDom.render(<EmployeeListContainer />, document.getElementById("employees"));
