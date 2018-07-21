import React, { Component } from "react";
import NavBar from "../../components/Nav";
import API from "../../utils/API";

class GuideDetail extends Component {
    state = {
      city: []
    };

    componentDidMount() {
      API.getCity(this.props.match.params.location)
        .then(res => this.setState({ guide: res.data }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <NavBar />
                {this.state.city.length ? (
                    <div className="row">
                        {this.state.city.map(guide => (
                            <div className="col s12 m4 guideCard">
                                <div className="card z-depth-0">
                                    <div className="card-image">
                                        <img className="cardImg" src={guide.image}/>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title">{guide.name}</span>
                                        <p>{guide.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <a className="guideButton" href={guide.link}>Learn More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ):(
                    <h3>No Results to Show</h3>
                )}
            </div>
        );
    }
}
  
export default GuideDetail;