import React from 'react';
import {Link} from 'react-router';
import {Cookie, UrlParser} from 'utils';

export class Auth extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      is_active: true
    }
    this.cookie = new Cookie();
    this.urlParser = new UrlParser();
  }

  login(e){
    e.preventDefault();
    var form = e.target;
    var pass = form.password.value;
    var username = form.username.value;
    // this.setState({is_active: false});
    $.ajax({
      method: "post",
      url: form.action,
      data: JSON.stringify({password: pass, username: username}),
      contentType: "application/json; charset=utf-8;",
      beforeSend : (jqXHR, settings) => {
        jqXHR.setRequestHeader("x-csrftoken", this.cookie.getName('csrftoken'));
      },
    }).then((resp, code)=>{
      window.location = this.urlParser.getParam("next", "/");
    }, ()=>{
      console.log(arguments)
    })
  }

  render(){
    return (
      <div className="root">
        <form action="/api/login/" method="post" onSubmit={(e)=>{this.login(e)}} >
          <div className="row align-middle">
            <div className="medium-6 medium-offset-3 columns">
              <div className="row">
                <div className="title medium-10 medium-offset-1 columns">
                  <h3 className="text-center">{gettext("Yellow pages. MyCompany.")}</h3>
                </div>
                <div className="medium-8 medium-offset-2 columns">
                  <label>
                    <input type="text" name="username" disabled={!this.state.is_active} placeholder="Login or Email"/>
                  </label>
                </div>
                <div className="medium-8 medium-offset-2 columns">
                  <label>
                    <input type="password" disabled={!this.state.is_active} name="password" placeholder="Password"/>
                  </label>
                </div>
                <div className="footer medium-8 medium-offset-2 columns">
                  <div className="row align-middle">
                    <div className="medium-6 columns">
                      <Link to="/reset-password/" className={this.state.is_active? "forgotPassword": "forgotPassword disabled"}>{gettext("Forgot password?")}</Link>
                    </div>
                    <div className="medium-6 columns text-right">
                      <Link to="/register/" className={this.state.is_active? "register": "register disabled"}>{gettext("Register")}</Link>
                      <input type="submit" disabled={!this.state.is_active} className="button" value={gettext('Login')}></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
