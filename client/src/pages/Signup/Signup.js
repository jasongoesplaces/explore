import React, { Component } from "react";
import AuthService from '../../components/AuthService';
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Signup extends Component {
    
    /* Instantiate an AuthService() object called 'Auth' */
    Auth = new AuthService()

    state = {
        name: "",
        email: "",
        password: ""
    }

    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {

        e.preventDefault();
        
        /* For the sake of simplicity, we will put our axios call to the /signup route here. This will send the server our username and password. Then we should get back some data telling us the result. */
        axios.post('/signup', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }).then((data) => {
            console.log(data);
            this.props.history.replace('/login');
        })
    }
  render() {
    return (
      <div className="landerPage">
        <div className="landerCard">
          <div className="container landerContainer">
            <div className="signupMenu">
                <img className="logoLander" src="./images/logoLander.png"/>
            </div>
            <div className="landerContent">
                <div className="signupDiv"></div>
                <form className="col s12 signupField">
                    <div className="row">
                        <div className="col l3 hide-on-med-and-down"></div>
                        <div className="input-field col s12 l6"> 
                            <input
                                className="validate inputBar"
                                name="email"
                                type="text"
                                onChange={this._handleChange}
                            />
                            <label htmlFor="email">EMAIL</label>
                        </div>
                        <div className="col l3 hide-on-med-and-down"></div>
                    </div>
                    <div className="row">
                        <div className="col l3 hide-on-med-and-down"></div>
                        <div className="input-field col s12 l6"> 
                            <input
                                className="validate inputBar"
                                name="name"
                                type="text"
                                onChange={this._handleChange}
                            />
                            <label htmlFor="name">NAME</label>
                        </div>
                        <div className="col l3 hide-on-med-and-down"></div>
                    </div>
                    <div className="row">
                        <div className="col l3 hide-on-med-and-down"></div>
                        <div className="input-field col s12 l6"> 
                            <input
                                className="validate inputBar"
                                name="password"
                                type="password"
                                onChange={this._handleChange}
                            />
                            <label htmlFor="password">PASSWORD</label>
                        </div>
                        <div className="col l3 hide-on-med-and-down"></div>
                    </div>
                    <div>
                        <a className="form-submit button loginSignupBtn" onClick={this.handleFormSubmit}>SIGN UP</a>
                    </div>
                </form>
                <a className="loginSignupLink" href="/login">Already have an account? Login</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}