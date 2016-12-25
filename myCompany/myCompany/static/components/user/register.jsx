import React from 'react';
import {browserHistory} from 'react-router';
import {Cookie, UrlParser} from 'utils';

export class Registration extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      is_active: true
    };
    this.cookie = new Cookie();
    this.urlParser = new UrlParser();
  }

  register(e){
    e.preventDefault();
    let form = e.target;
    let username = form.username.value;
    let email = form.email.value;
    let password = form.password.value;
    let retape_password = form.retape_password.value;
    $.ajax({
      url: '/api/register/',
      type: form.method,
      contentType: "application/json; charset=utf-8;",
      data: JSON.stringify({
        username: username,
        email: email,
        password: password,
        retape_password: retape_password
      }),
      beforeSend: (jqXHR, settings) => {
        jqXHR.setRequestHeader("x-csrftoken", this.cookie.getName('csrftoken'));
      }
    }).then((resp, code)=>{
      window.location = this.urlParser.getParam("next", "/");
    }, ()=>{
      console.log(arguments)
    })
  }

  render(){
    return (
      <div className="root" id="registration">
        <form action="/register/" method="POST" id="reg_form" onSubmit={(e)=>{this.register(e)}}>
        <div className="row align-middle">
          <div className="medium-6 medium-offset-3 columns">
            <div className="row">
              <div className="title medium-10 medium-offset-1 columns">
                <h3 className="text-center">{gettext("MyCompany. Registration.")}</h3>
              </div>
              <div className="medium-8 medium-offset-2 columns">
                <label>
                  <input type="text" name="username" autoComplete="off" disabled={!this.state.is_active} placeholder={gettext("Username")}/>
                </label>
              </div>
              <div className="medium-8 medium-offset-2 columns">
                <label>
                  <input type="text" name="email" autoComplete="off" disabled={!this.state.is_active} placeholder={gettext("Email")}/>
                </label>
              </div>
              <div className="medium-8 medium-offset-2 columns">
                <label>
                  <input type="password" autoComplete="off" disabled={!this.state.is_active} name="password" placeholder={gettext("Password")}/>
                </label>
              </div>
              <div className="medium-8 medium-offset-2 columns">
                <label>
                  <input type="password" autoComplete="off" disabled={!this.state.is_active} name="retape_password" placeholder={gettext("Retape password")}/>
                </label>
              </div>
              <div className="footer medium-8 medium-offset-2 columns">
                <div className="row align-middle">
                  <div className="medium-6 columns">
                    <button type="button" onClick={browserHistory.goBack}>{gettext("Back")}</button>
                  </div>
                  <div className="medium-6 columns text-right">
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
