import React, { Component } from "react";

class Lander extends Component {
  render() {
    return (
      <div className="landerPage">
        <div className="landerCard">
          <div className="container landerContainer">
            <div className="landerMenu">
              <img className="logoLander" src="./images/logoLander.png"/>
            </div>
            <div className="landerContent">
                <div className="loginDiv"></div>
                <form className="col s12 loginField">
                    <div className="row">
                        <div className="input-field col s12"> 
                            <input id="email" type="email" className="validate inputBar"/>
                            <label for="email">EMAIL</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12"> 
                            <input id="password" type="password" className="validate inputBar"/>
                            <label for="password">PASSWORD</label>
                        </div>
                    </div>
                    <div>
                        <a className="button" href="/login">LOGIN</a>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lander;