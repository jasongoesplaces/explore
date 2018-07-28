import React, { Component } from "react";
import NavBar from "../../components/Nav"

class Dashboard extends Component {
  render() {
    return (
        <div className="guides">
            <NavBar/>
            <div class="container dashboard">
                <section className="row">
                    <h1 className="title">Welcome to explore</h1>
                    <hr/>
                </section>
                <div className="row">
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-contentDash">
                                <span class="card-title">City Guides</span>
                                <p>
                                    Find the best activities in your destination with our city guides.
                                </p>
                            </div>
                            <div className="card-action">
                                <a className="guideButton" href="/guides">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-contentDash">
                                <span class="card-title">Events</span>
                                <p>
                                    Connect with locals in your destination by finding the hottest events in town.
                                </p>
                            </div>
                            <div className="card-action">
                                <a className="guideButton" href="/events">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-contentDash">
                                <span class="card-title">Forum</span>
                                <p>
                                    Have questions about your destination? Join in the discussion on the forum to get answers.
                                </p>
                            </div>
                            <div className="card-action">
                                <a className="guideButton" href="/forum">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;