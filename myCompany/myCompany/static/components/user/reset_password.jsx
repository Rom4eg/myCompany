import React from 'react';
import {browserHistory} from 'react-router';
import {Cookie, UrlParser} from 'utils';

export class ResetPassword extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      is_active: true
    }
    this.cookie = new Cookie();
    this.urlParser = new UrlParser();
  }

  resetPassword(e){
    e.preventDefault();
    let email = e.target.email.value;
    $.ajax({
      type: 'PUT',
      url: '/api/reset-password/',
      contentType: "application/json; charset=utf-8;",
      data: JSON.stringify({"email": email}),
      beforeSend: (jqXHR, settings) => {
        jqXHR.setRequestHeader("x-csrftoken", this.cookie.getName('csrftoken'));
      }
    }).then((resp, code)=>{
      console.log(arguments);
    }, ()=>{
      console.log(arguments);
    })
  }

  render(){
    return (
      <div className="root" id="resetPassword">
        <form action="/reset-password/" id="resetForm" onSubmit={(e)=>{this.resetPassword(e)}}>
          <div className="row align-middle">
            <div className="medium-6 medium-offset-3 columns">
              <div className="row">
                <div className="title medium-10 medium-offset-1 columns">
                  <h3 className="text-center">{gettext("MyCompany. Reset password.")}</h3>
                </div>
                <div className="medium-8 medium-offset-2 columns">
                  <label>
                    <input type="text" name="email" autoComplete="off" disabled={!this.state.is_active} placeholder={gettext("Email")}/>
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