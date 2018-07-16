import React, { Component } from "react";
import NavBar from "../../components/Nav"

class About extends Component {
  render() {
    return (
      <div className="about">
        <NavBar/>
        <div className="row">
            <div className="col m2 hide-on-small-only"></div>
            <div className="col s12 m8 aboutContent">
                <h1>About The explore Project</h1>
                <p>The goal of The explore Project is to help users find a new kind of travel experience.
                    Too frequently we see friends and family go on vacations and spend their hard earned 
                    money just to end up in locations with huge crowds of people trying to see the same 
                    small monument. They wait in endless lines just to get a picture of the same tourist 
                    attraction that thousands of other people have nearly identical pictures of. When it's 
                    finally time to return home, they realize they haven't seen anything unique or truely
                    experienced the local culture. It just feels like they didn't get the most out of the 
                    trip that they could have, and even worse, they already spend their entire vacation budget.
                </p>

                <p>The explore Project wants to help alleviate this problem by providing a new type of city 
                    guide. You wont find the typical tourist traps, but rather activities and restaurants that 
                    are off the beaten path. Written by locals and frequent visitors, each guide will help you 
                    find a more authentic local experience to make your vacation even more memorable. Additionally, 
                    the events page will help you find upcoming events in the place you want to visit and the forum 
                    will allow you to ask questions relative to each city guide location as well as offer answers to 
                    questions based on your own experiences.
                </p>
                <h5>explore the world, travel like a local.</h5>
            </div>
            <div className="col m2 hide-on-small-only"></div>
        </div>    
    </div>
    );
  }
}

export default About;