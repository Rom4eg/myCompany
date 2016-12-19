import React from 'react';
import {browserHistory} from 'react-router';
import {Cookie} from 'utils';

export class Registration extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      is_active: true
    };
    this.cookie = new Cookie();
  }

  render(){
    return (
      <div className="root" id="registration">
        <form action="/register/" method="POST" id="reg_form">
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
                    <button type="button" onClick={browserHistory.goBack}>{gettext("Login")}</button>
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
