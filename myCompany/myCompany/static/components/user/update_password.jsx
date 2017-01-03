import React from 'react';
import { browserHistory } from 'react-router';
import {Cookie, UrlParser} from 'utils';

export class UpdatePassword extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      is_active: true
    }
    this.cookie = new Cookie();
    this.urlParser = new UrlParser();
  }

  updatePassword(e){
    e.preventDefault();
    var form = e.target;
    var data = {
      reset_hash: this.props.params.hash,
      password: form.password.value,
      retape_password: form.password_retape.value
    };
    $.ajax({
      type: 'PATCH',
      url: '/api/reset-confirm/',
      contentType: "application/json; charset=utf-8;",
      data: JSON.stringify(data),
      beforeSend: (jqXHR, settings) => {
        jqXHR.setRequestHeader("x-csrftoken", this.cookie.getName('csrftoken'));
      }
    })
  }

  render(){
    return (
      <div className="root" id="updatePassword">
        <form action="/reset-confirm/" id="updatePwdForm" onSubmit={(e)=>{this.updatePassword(e)}}>
          <div className="row align-middle">
            <div className="medium-6 medium-offset-3 columns">
              <div className="row">
                <div className="title medium-10 medium-offset-1 columns">
                  <h3 className="text-center">{gettext("MyCompany. Update password.")}</h3>
                </div>
                <div className="medium-8 medium-offset-2 columns">
                  <label>
                    <input type="text" name="password" autoComplete="off" disabled={!this.state.is_active} placeholder={gettext("Password")}/>
                  </label>
                </div>
                <div className="medium-8 medium-offset-2 columns">
                  <label>
                    <input type="text" name="password_retape" autoComplete="off" disabled={!this.state.is_active} placeholder={gettext("Retype password")}/>
                  </label>
                </div>
                <div className="footer medium-8 medium-offset-2 columns">
                  <div className="row align-middle">
                    <div className="medium-6 columns">
                      <button type="button" onClick={browserHistory.goBack}>{gettext("Back")}</button>
                    </div>
                    <div className="medium-6 columns text-right">
                      <input type="submit" disabled={!this.state.is_active} className="button" value={gettext('Save')}></input>
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
