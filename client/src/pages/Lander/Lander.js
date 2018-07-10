import React, { Component } from "react";

class Lander extends Component {
  render() {
    return (
      <div className="landerPage">
        <div className="landerCard">
          <div className="landerContainer">
            <div className="landerMenu">
              <h3>travel.</h3>
            </div>
            <div className="landerContent">
              <div className="landerText">
                <h1>Let's discover 
                  the world.</h1>
                <p>Travel lets you explore new places. 
                  Simply choose where you want to go.</p>
                <a href="#">Let's go !</a>
              </div>  
            </div>
          </div>
          <div className="photo"></div>
        </div>
      </div>
    );
  }
}

export default Lander;