import React, { Component } from "react";
import NavBar from "../../components/AboutNav"

class About extends Component {
  render() {
    return (
      <div className="about">
        <NavBar/>
        <div className="row">
            <div className="col m2 hide-on-small-only"></div>
            <div className="col s12 m8 aboutContent">
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 offset-m1 m10 center">
                                <h4 className="center">explore the world, travel&nbsp;like&nbsp;a&nbsp;local.</h4>
                                <img className="aboutImg" src="images/bergen2.jpg"/>
                                <p className="left-align light center">
                                    explore helps users find a new kind of travel experience. Too often when we
                                    travel, we focus all our time and money seeing the same gaudy tourist traps
                                    that are flooded with huge crowds. By the end of the trip, we realize we've
                                    only seen the same old spots and taken the same photos that millions of other
                                    tourists have taken and missed out on the local culture. explore allows its
                                    users to find unique stops to add to their trip to get an athentic taste of 
                                    the local culture.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center aboutIcons">
                                    <i className="material-icons">computer</i>
                                </h2>
                                <h5 className="center">City Guides</h5>
                                <p class="light">Our city guides contain some of the 
                                    best local places from each featured destination that will 
                                    help you make the most of your trip.
                                </p>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center aboutIcons">
                                    <i className="material-icons">event</i>
                                </h2>
                                <h5 className="center">Events</h5>
                                <p className="light">One of the best ways to connect with
                                    the local culture is through events. Our events page allows you
                                    to search for upcoming events in a city and buy tickets.
                                </p>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center aboutIcons">
                                    <i className="material-icons">forum</i>
                                </h2>
                                <h5 className="center">Forum</h5>

                                <p className="light">The forum is your chance to get personal advice
                                    from a local as well as join in to help out others that have 
                                    questions about your hometown.</p>
                            </div>
                        </div>
                    </div>
                    <div> 
                        <a className="button guideButton aboutButton" href="/signup">SIGN UP</a>
                    </div>
                    <div className="col m2 hide-on-small-only"></div>
                </div>
            </div> 
        </div>   
      </div>
    );
  }
}

export default About;