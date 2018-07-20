import React, { Component } from "react";
import NavBar from "../../components/LanderNav"

class Lander extends Component {
  render() {
    return (
      <div className="landerPage">
      <NavBar />
        <div className="landerCard">
          <div className="container landerContainer">
            <div className="landerMenu">
              <img className="logoLander" src="./images/logoLander.png"/>
            </div>
            <div className="landerContent">
            <div className="landerDiv"></div>
              <div> 
                <a className="landerButton" href="/about">GET STARTED</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lander;