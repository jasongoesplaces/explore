import React, { Component } from "react";
import NavBar from "../../components/Nav"
import {Tabs, Tab} from 'react-materialize'

class Guides extends Component {
  render() {
    return (
      <div className="guides">
        <NavBar/>
        <div className="row">
            <div className="col s12">
                <Tabs className="tabs z-depth-0">
                    <span className="col m1 hide-on-small-only" disabled></span>
                    <Tab className="tab col m2" title="N. America" active>
                        <div id="NorthAmerica" className="col s12">
                            <div className="row">
                                <div className="col s12 m6 guideCard">
                                    <div className="card z-depth-0">
                                        <div className="card-image">
                                            <img className="cardImg" src="images/orlando.jpg"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Orlando, FL, USA</span>
                                            <p>Located in central Florida in the south-eastern United 
                                                States, Orlando is well known as the theme park capital 
                                                of the world. Look beyond the theme parks, though, and
                                                you will discover The City Beautiful has much more to 
                                                offer.
                                            </p>
                                        </div>
                                        <div className="card-action">
                                            <a className="guideButton" href="/guides/orlando">Explore Orlando</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6 guideCard">
                                    <div className="card z-depth-0">
                                        <div className="card-image">
                                            <img className="cardImg" src="images/tampa.jpg"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Tampa, FL, USA</span>
                                            <p>Tampa is a city on Tampa Bay, along Florida’s Gulf Coast. It is
                                                a major business center, but also rich in culture. Nicknamed 
                                                Cigar City, it is home to the oldest cigar manufacturer in the 
                                                USA. 
                                            </p>
                                        </div>
                                        <div className="card-action">
                                            <a className="guideButton" href="/guides/tampa">Explore Tampa</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 m6 guideCard">
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
                                            <a className="guideButton" href="/guides/oahu">Explore Oahu</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6 guideCard">
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
                                            <a className="guideButton" href="/guides/vermont">Explore Vermont</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tab col m2" title="Europe">
                        <div id="Europe" className="col s12">
                            <div className="row">
                                <div className="col s12 m6 guideCard">
                                    <div className="card z-depth-0">
                                        <div className="card-image">
                                            <img className="cardImg" src="images/bergen.jpg"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Bergen, Norway</span>
                                            <p>Located on Norway's south-western coast, the former capital of the country is
                                                surrounded by mountains and fjords. It's old wharf is still home to traditional
                                                colorful wooden houses.
                                            </p>
                                        </div>
                                        <div className="card-action">
                                            <a className="guideButton" href="/guides/bergen">Explore Bergen</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6 guideCard">
                                    <div className="card z-depth-0">
                                        <div className="card-image">
                                            <img className="cardImg" src="images/goldenCircle.jpg"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">The Golden Circle, Iceland</span>
                                            <p>The Golden Circle is a popular tourist route in southern Iceland. It is home
                                                to many of the country's most famous tourist spots, however, the Golden Circle 
                                                offers much more than just the usual tourist traps.
                                            </p>
                                        </div>
                                        <div className="card-action">
                                            <a className="guideButton" href="/guides/the%20golden%20circle">Explore Iceland</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tab col m2" title="Asia">
                        <div id="Asia" className="col s12">
                            <div className="row">
                                <div className="col s12 m6 guideCard">
                                    <div className="card z-depth-0">
                                        <div className="card-image">
                                            <img className="cardImg" src="images/bangkok.jpg"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Bangkok, Thailand</span>
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                            I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                            <h5>Coming Soon</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6 guideCard">
                                    <div className="card z-depth-0">
                                        <div className="card-image">
                                            <img className="cardImg" src="images/tokyo.jpg"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Tokyo, Japan</span>
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                            I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                            <h5>Coming Soon</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tab col m2" title="Africa">
                        <div id="Africa" className="col s12">
                            <div className="row">
                                <div className="col s12 m6 guideCard">
                                    <div className="card z-depth-0">
                                        <div className="card-image">
                                            <img className="cardImg" src="images/capeTown.jpg"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Cape Town, South Africa</span>
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                            I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                            <h5>Coming Soon</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6 guideCard">
                                    <div className="card z-depth-0">
                                        <div className="card-image">
                                            <img className="cardImg" src="images/namibia.jpg"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Atlantic Coast, Namibia</span>
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                            I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                            <h5>Coming Soon</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tab col m2" title="S. America">
                        <div id="SouthAmerica" className="col s12">
                            <div className="row">
                                <div className="col s12 m6 guideCard">
                                    <div className="card z-depth-0">
                                        <div className="card-image">
                                            <img className="cardImg" src="images/lima.jpg"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Lima, Peru</span>
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                            I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                            <h5>Coming Soon</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6 guideCard">
                                    <div className="card z-depth-0">
                                        <div className="card-image">
                                            <img className="cardImg" src="images/santiago.jpg"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Santiago, Chile</span>
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                            I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                            <h5>Coming Soon</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <span className="col m1 hide-on-small-only" disabled></span>
                </Tabs>
            </div>
        </div>    
    </div>
    );
  }
}

export default Guides;