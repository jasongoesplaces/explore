import React, { Component } from "react";
import NavBar from "../../components/Nav"

class Dashboard extends Component {
  render() {
    return (
        <div className="guides">
            <NavBar/>
            <div class="container full-screen">
                <section className="row">
                    <h1 className="title">Info Cards</h1>
                    <hr/>
                    <div className="col-xs-8 col-xs-offset-2">
                        <p className="lead text-center">A set of cards made to display an extract of information. When you hover, it displays a title, paragraph and button with transition effects.</p>
                        <hr/>
                    </div>
                </section>
                <div className="row">
                    <article className="col-xs-4">
                        <div className="cards"><span className="glyphicon glyphicon-flash icon"></span>
                            <hr className="divider" />
                            <h2 className="title">First</h2>
                            <div className="info">
                                <hr className="divider" />
                                <p className="lead">Are you ready see the next page and be amazed of what you can find?</p><a className="btn btn-lg center-block">Go get it!</a></div>
                        </div>
                    </article>
                    <article className="col-xs-4">
                        <div className="cards"><span className="glyphicon glyphicon-bookmark icon"></span>
                            <hr className="divider" />
                            <h2 className="title">Second</h2>
                            <div className="info">
                                <hr className="divider" />
                                <p className="lead">Are you ready to see the next page and be amazed of what you can find?</p><a className="btn btn-lg center-block">Go get it!</a></div>
                        </div>
                    </article>
                    <article className="col-xs-4">
                        <div className="cards"><span className="glyphicon glyphicon-ice-lolly-tasted icon"></span>
                            <hr className="divider" />
                            <h2 className="title">Last</h2>
                            <div className="info">
                                <hr className="divider" />
                                <p className="lead">Are you ready to go to the next page and be amazed of what you can find?</p><a className="btn btn-lg center-block">Go get it!</a></div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;