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
            <div className="landerDiv"></div>
              <div> 
                <a className="button" href="/signup">SIGN UP</a>
              </div>
              <div>
                <a className="button" href="/login">LOGIN</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lander;