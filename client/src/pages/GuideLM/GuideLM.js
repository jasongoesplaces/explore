import React, { Component } from "react";
import API from "../../utils/API";

class GuideLM extends Component {
    state = {
      guide: {}
    };

    componentDidMount() {
      API.getActivity(this.props.match.params.id)
        .then(res => this.setState({ guide: res.data }))
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper navBar">
                        <a href="/about" className="brand-logo">explore {this.state.guide.location}</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/guides">Guides</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/forum">Forum</a></li>
                        <li><a className="waves-effect waves-light btn">Log Out</a></li>
                        </ul>
                        <ul id="nav-mobile" className="left hide-on-large-only">
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons right">menu</i></a></li>
                        </ul>
                    </div>
                </nav>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="/about">Dashboard</a></li>
                    <li><a href="/guides">Guides</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/forum">Forum</a></li>
                    <li><a href="/logout">Log Out</a></li>
                </ul>
                <div className="row">
                    <div className="col s12 l7">
                        <div className="restaurantInfo">
                            <h1 className="name">{this.state.guide.name}</h1>
                            <h5 className="address">{this.state.guide.address}</h5>
                            <p>{this.state.guide.description}</p>
                            <a className="guideButton" target="_blank" href={this.state.guide.link}>Visit Website</a>
                        </div>
                    </div>
                    <div className="col s12 l5 mapContainer">
                        <div id="image">
                            <img src={this.state.guide.image} />
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default GuideLM;