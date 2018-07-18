import React, { Component } from "react";
import NavBar from "../../components/Nav"

class CityGuide extends Component {
    state = {
      location: {}
    };
    componentDidMount() {
      API.getCity(this.props.match.params.location)
        .then(res => this.setState({ location: res.data }))
        .catch(err => console.log(err));
    }
  
    render() {
      return (
        <div className="guides">
            <NavBar/>
            <div className="row">
            </div>
        </div>
      )
    }
}

export default CityGuide;