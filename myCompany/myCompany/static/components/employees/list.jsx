import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';

class EmployeeListItem extends React.Component{
  render(){
    return (
      <div className="list-item">
        <div className="wrapper">
          <div className="avatar">
            <img src="" alt=""/>
          </div>
          <div className="header">
            <div className="name">
              <div className="first_name">{this.props.data.first_name}</div>
              <div className="middle_name">{this.props.data.middle_name}</div>
              <div className="last_name">{this.props.data.last_name}</div>
            </div>
            <div className="date_joined">Since {moment(this.props.data.user.date_joined).format('YYYY-MM-DD')}</div>
          </div>
          <div className="company">{this.props.data.company}</div>
          <div className="department">{this.props.data.department}</div>
          <div className="email">{this.props.data.user.email}</div>
          <div className="phone">{this.props.data.phone_main}</div>
        </div>
      </div>
    )
  }
}

export class EmployeeListContainer extends React.Component{

  constructor(props){
      super(props);
      this.state = {items:[]};
  }

  componentDidMount(){
    this.active_request = $.ajax({
        url: '/api/employee/',

    }).then((resp)=>{
        this.setState({items: resp});
    });
  }

  componentWillUnmount(){
    if(this.active_request){
      this.active_request.abort();
      this.active_request = undefined;
    }
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
