import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="landerPage">
        <div className="landerCard">
          <div className="container landerContainer">
            <div className="loginMenu">
              <img className="logoLander" src="./images/logoLander.png"/>
            </div>
            <div className="landerContent">
                <div className="loginDiv"></div>
                <form className="col s12 loginField">
                    <div className="row">
                        <div className="col l3 hide-on-med-and-down"></div>
                        <div className="input-field col s12 l6"> 
                            <input id="email" type="email" className="validate inputBar"/>
                            <label for="email">EMAIL</label>
                        </div>
                        <div className="col l3 hide-on-med-and-down"></div>
                    </div>
                    <div className="row">
                        <div className="col l3 hide-on-med-and-down"></div>
                        <div className="input-field col s12 l6"> 
                            <input id="password" type="password" className="validate inputBar"/>
                            <label for="password">PASSWORD</label>
                        </div>
                        <div className="col l3 hide-on-med-and-down"></div>
                    </div>
                    <div>
                        <a className="button" href="/guides">LOGIN</a>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;