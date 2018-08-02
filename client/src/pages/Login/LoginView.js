import React from "react";

const LoginView = ({ onSubmit }) => {
  return (
    <div className="landerPage">
      <div className="landerCard">
        <div className="container landerContainer">
          <div className="loginMenu">
            <img className="logoLander" src="./images/logoLander.png"/>
          </div>
          <div className="landerContent">
              <div className="loginDiv"></div>
              <form className="col s12 loginField" onSubmit={onSubmit}>
                  <div className="row">
                      <div className="col l3 hide-on-med-and-down"></div>
                      <div className="input-field col s12 l6"> 
                          <input id="email" type="email" name="email" className="validate inputBar"/>
                          <label htmlFor="email">EMAIL</label>
                      </div>
                      <div className="col l3 hide-on-med-and-down"></div>
                  </div>
                  <div className="row">
                      <div className="col l3 hide-on-med-and-down"></div>
                      <div className="input-field col s12 l6"> 
                          <input id="password" type="password" name="password" className="validate inputBar"/>
                          <label htmlFor="password">PASSWORD</label>
                      </div>
                      <div className="col l3 hide-on-med-and-down"></div>
                  </div>
                  <div>
                      {/* <a className="button loginSignupBtn" href="/dashboard">LOGIN</a> */}
                      <button className="button loginSignupBtn">LOGIN</button>
                  </div>
              </form>
            <a className="loginSignupLink" href="/signup">Don't have an account? Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginView;