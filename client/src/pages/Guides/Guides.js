import React, { Component } from "react";
import NavBar from "../../components/Nav"

class Guides extends Component {
  render() {
    return (
      <div className="dashboard">
        <NavBar/>
        <div className="row">
            <div className="col s12">
                <ul className="tabs z-depth-0">
                    <li className="col m1 hide-on-small-only"></li>
                    <li className="tab col m2"><a class="active" href="#NorthAmerica">N. America</a></li>
                    <li className="tab col m2"><a href="#Europe">Europe</a></li>
                    <li className="tab col m2"><a href="#Asia">Asia</a></li>
                    <li className="tab col m2"><a href="#Africa">Africa</a></li>
                    <li className="tab col m2"><a href="#SouthAmerica">S. America</a></li>
                    <li className="col m1 hide-on-small-only"></li>
                </ul>
            </div>
            <div id="NorthAmerica" className="col s12">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img className="cardImg" src="images/orlando.jpg"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Orlando, FL, USA</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <a className="button" href="/guides">Explore Orlando</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img className="cardImg" src="images/tampa.jpg"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Tampa, FL, USA</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <a className="button" href="/guides">Explore Tampa</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img className="cardImg" src="images/oahu.jpg"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Oahu, HI, USA</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <a className="button" href="/guides">Explore Orlando</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img className="cardImg" src="images/vermont.jpg"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Vermont, USA</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <a className="button" href="/guides">Explore Tampa</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Europe" className="col s12">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img className="cardImg" src="images/bergen.jpg"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Bergen, Norway</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <a className="button" href="/guides">Explore Bergen</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img className="cardImg" src="images/goldenCircle.jpg"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Golden Circle, Iceland</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <a className="button" href="/guides">Explore Iceland</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Asia" className="col s12">
                <h1>Coming Soon</h1>
            </div>
            <div id="Africa" className="col s12">
                <h1>Coming Soon</h1>
            </div>
            <div id="SouthAmerica" className="col s12">
                <h1>Coming Soon</h1>
            </div>
        </div>    
    </div>
    );
  }
}

export default Guides;