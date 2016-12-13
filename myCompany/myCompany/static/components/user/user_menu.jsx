import React from 'react';
import ReactDom from 'react-dom';
// import { LoginForm } from './login_form.jsx';

export class AnonymousUserMenu extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){


  }

  showLoginForm(e){
    $("#loginModal").foundation('open');
  }

  render(){
    return (
      <ul className="menu">
        <li className="">
          <a onClick={ (e)=>{ this.showLoginForm(e) } } href="#">{gettext('LogIn')}</a>
        </li>
      </ul>
    )
  }
}

export class AuthorizedUserMenu extends React.Component{

  componentDidMount(){
    var elem = new Foundation.DropdownMenu($("#top-dropdown"));
  }

  logout(e){
    $.ajax({url:'logout'});
    this.props.onLogout(e);
  }

  render(){
    return (
      <ul id="top-dropdown" className="dropdown menu" data-dropdown-menu>
        <li className="is-dropdown-submenu-parent">
          <a href="#">{this.props.data.email}</a>
          <ul className="dropdown menu" data-dropdown-menu>
            <li><a href="#">{gettext('Settings')}</a></li>
            <li><a onClick={()=>{ this.logout() }} href="#">{gettext('Logout')}</a></li>
          </ul>
        </li>
      </ul>
    )
  }
}

export class UserMenu extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      user:{
        is_authenticated: false
      }
    }
    $.ajax({
      url: '/api/current-user-info/'
    }).done((resp)=>{
      this.setState({
        user: resp
      })
    })
  }

  handleLogout(){
    this.setState({
      user: {
        is_authenticated: false
      }
    })
  }

  handleLogin(){
    this.setState({
      user: {
        is_authenticated: true
      }
    })
  }

  render(){
    return (
      <div>
      { this.state.user.is_authenticated?
        (<AuthorizedUserMenu data={this.state.user} onLogout={ (e)=>{this.handleLogout(e)} }/>):
        (<AnonymousUserMenu onLogin={ (e)=>{ this.handleLogin(e) } }/>)
      }
      {/* <LoginForm /> */}
      </div>
    )
  }
}
