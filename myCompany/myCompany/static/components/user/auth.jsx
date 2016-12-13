import React from 'react';

export class Auth extends React.Component{

  render(){
    return (
      <div className="root">
        <form action="/login/" method="post">
          <div className="row align-middle">
            <div className="medium-6 medium-offset-3 columns">
              <div className="row">
                <div className="title medium-10 medium-offset-1 columns">
                  <h3 className="text-center">{gettext("Yellow pages. MyCompany.")}</h3>
                </div>
                <div className="medium-8 medium-offset-2 columns">
                  <label>
                    <input type="text" name="login" placeholder="Login or Email"/>
                  </label>
                </div>
                <div className="medium-8 medium-offset-2 columns">
                  <label>
                    <input type="password" name="password" placeholder="Password"/>
                  </label>
                </div>
                <div className="footer medium-8 medium-offset-2 columns">
                  <div className="row align-middle">
                    <div className="medium-6 columns">
                      <a className="forgotPassword">{gettext("Forgot password?")}</a>
                    </div>
                    <div className="medium-6 columns text-right">
                      <a className="register">{gettext("Register")}</a>
                      <input type="submit" className="button" value={gettext('Login')}></input>
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
