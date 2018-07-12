import React, { Component } from "react";

class Lander extends Component {
  render() {
    return (
      <div className="landerPage">
        <div className="landerCard">
          <div className="container landerContainer">
            <div className="landerMenu">
              <img src="./images/exploreLogo.jpg"/>
            </div>
            <div className="landerContent">
              <div className="landerText">
                <h5>Discover the road less traveled.</h5>
              </div>
              <div> 
                <a className="button" href="#">Sign Up</a>
              </div>
              <div>
                <a className="button" href="#">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lander;