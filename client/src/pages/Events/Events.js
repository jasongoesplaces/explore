import React, { Component } from "react";
import NavBar from "../../components/Nav"

class Events extends Component {
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
                                <input id="icon_prefix" type="text" className="searchBar eventSearch"/>
                                <label className="searchLabel" htmlFor="icon_prefix">Enter a City to find Events</label>
                            </div>
                            <div className="col s2">
                                <button id="eventSearchBtn" href="#" className="eventButton">Search</button>
                            </div>
                            <div className="col s1"></div>
                        </div>
                    </form>
                </div>
                <div className="col m4 hide-on-small-only"></div>
            </div>
            <div className="row">
                <div className="col s12" id="eventsResults"></div>
            </div>
        </div>
    )
  }
}

export default Events;