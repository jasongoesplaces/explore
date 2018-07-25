import React, { Component } from "react";
import API from "../../utils/API";

class GuideDetail extends Component {
    state = {
      guide: []
    };

    componentDidMount() {
        // this.setState({guide: [{
        //     location: "Orlando",
        //     type: "Entertainment",
        //     name: "Orlando City SC",
        //     address: "655 W Church St, Orlando, FL 32805",
        //     description: "Local top flight soccer team with strong local following. On game days the road in front of the stadium is closed off and food trucks are brought in creating a block party type of atmosphere.",
        //     image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Orlando_city_soccer_stadium.jpg",
        //     link: "https://www.orlandocitysc.com/"
        //   }]})
      API.getCity(this.props.match.params.location)
        .then(res => this.setState({ guide: res.data }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="guides">
                <nav>
                    <div className="nav-wrapper navBar">
                        <a href="/about" className="brand-logo">explore {this.props.match.params.location}</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/guides">Guides</a></li>
                        <li><a href="/events">Events</a></li>
                        {/* <li><a href="/forum">Forum</a></li> */}
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
                {this.state.guide.length ? (
                    <div className="row">
                        {this.state.guide.map(guide => (
                            <div className="col s12 m4 guideCard">
                                <div className="card z-depth-0">
                                    <div className="card-image">
                                        <img className="cardImg" src={guide.image}/>
                                    </div>
                                    <div className="card-content cardContentGuideDetail">
                                        <span className="card-title">{guide.name}</span>
                                        <p className="guideDetailAddress">{guide.address}</p>
                                        <p>{guide.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <a className="guideButton" target="_blank" href={guide.link}>Learn More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ):(
                    <div className="row">
                        <div className="col s12 err">
                            <h4 className="guideDetailErr">Sorry! We Don't Have a Guide for this Location Yet</h4>
                            <p className="guideDetailErr">Click or tap the button below to see all of our current city guides.</p>
                            <a className="guideButtonErr" href="/guides">Guides</a>
                        </div>
                    </div>

                )}
            </div>
        );
    }
}
  
export default GuideDetail;