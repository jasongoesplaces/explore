import React, { Component } from "react";
import NavBar from "../../components/Nav"
import Axios from "../../../../node_modules/axios";

class Events extends Component {
    state = {
        search: "",
        results: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search)
        var query = "https://app.ticketmaster.com/discovery/v2/events.json?source=ticketmaster&city=" + this.state.search + "&apikey=lGBKPRi2mIZ03mNlpjqBKE6b6S0We9Kn"
        Axios.get(query)
        .then(results => {
            console.log(results)
            return results;
        }).then(data => {
            console.log(data)
            let result = data.data._embedded.events.map((event) => {
                return(
                    <div className='col s12 m3'>
                        <div className='card z-depth-0'>
                            <div className='card-image'>
                                <img className='cardImgEvent' src={event.images[1].url} />
                            </div>
                            <div className='card-content'>
                                <span className='card-title eventTitle'>{event.name}</span>
                                <p>Event Date: {event.dates.start.localDate}</p>
                            </div>
                            <div className='card-action eventCardAction'>
                                <a className='eventButton2' target='_blank' href={event.url}>Details</a>
                            </div>
                        </div>
                    </div>
                )
            })
            this.setState({results: result})
        })
    }

  render() {
    return (
        <div className="events">
            <NavBar/>
            <div className="row">
                <div className="col m4 hide-on-small-only"></div>
                <div className="col s12 m4 searchField">
                    <form className="input-field seachFieldBG">
                        <div className="row">
                            <div className="col s1"></div>
                            <div className="col s8">
                                <i className="material-icons prefix eventSearchIcon">search</i>
                                <input id="icon_prefix" type="text" name="search" value={this.state.search} onChange={this.handleInputChange} className="searchBar eventSearch"/>
                                <label className="searchLabel" htmlFor="icon_prefix">Enter a City to find Events</label>
                            </div>
                            <div className="col s2">
                                <button id="eventSearchBtn" className="eventButton" disabled={!(this.state.search)} onClick={this.handleFormSubmit}>Search</button>
                            </div>
                            <div className="col s1"></div>
                        </div>
                    </form>
                </div>
                <div className="col m4 hide-on-small-only"></div>
            </div>
            <div className="row">
                <div className="col s12" id="eventsResults">{this.state.results}</div>
            </div>
        </div>
    )
  }
}

export default Events;