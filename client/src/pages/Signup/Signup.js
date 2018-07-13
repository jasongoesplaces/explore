import React, { Component } from "react";

class Lander extends Component {
  render() {
    return (
      <div className="landerPage">
        <div className="landerCard">
          <div className="container landerContainer">
            <div className="signupMenu">
                <img className="logoLander" src="./images/logoLander.png"/>
            </div>
            <div className="landerContent">
                <div className="signupDiv"></div>
                <form className="col s12 signupField">
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
                            <input id="name" type="text" className="validate inputBar"/>
                            <label for="name">NAME</label>
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
                    <div className="row">
                        <div className="col l3 hide-on-med-and-down"></div>
                        <div className="input-field col s12 l6"> 
                            <input id="password" type="password" className="validate inputBar"/>
                            <label for="password">CONFIRM PASSWORD</label>
                        </div>
                        <div className="col l3 hide-on-med-and-down"></div>
                    </div>
                    <div>
                        <a className="button" href="/login">SIGN UP</a>
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