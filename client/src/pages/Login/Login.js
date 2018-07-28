import React, { Component } from "react";
import AuthService from '../../components/AuthService';
import { Link } from 'react-router-dom';



class Login extends Component {
    
    /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
    Auth = new AuthService();

    state = {
        email: "",
        password: ""
    }

    /* Fired off every time the use enters something into the input fields */
    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {
        // e.preventDefault();
        console.log("test")
        /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
        this.Auth.login(this.state.email, this.state.password)
        .then((res) => {
            if(res === false){
                return alert("Username or Password Incorrect")
            }
            this.props.history.replace('/dashboard');
        }).catch(err => {
            alert(err);
        })
    }

    componentWillMount() {

        /* Here is a great place to redirect someone who is already logged in to the protected route */
        if(this.Auth.loggedIn())
            this.props.history.replace('/dashboard')
    }

  render() {
    return (
      <div className="landerPage">
        <div className="landerCard">
          <div className="container landerContainer">
            <div className="loginMenu">
              <img className="logoLander" src="./images/logoLander.png"/>
            </div>
            <div className="landerContent">
                <div className="loginDiv"></div>
                <form className="col s12 loginField">
                    <div className="row">
                        <div className="col l3 hide-on-med-and-down"></div>
                        <div className="input-field col s12 l6"> 
                            <input id="email" type="email" className="validate inputBar"/>
                            <label htmlFor="email">EMAIL</label>
                        </div>
                        <div className="col l3 hide-on-med-and-down"></div>
                    </div>
                    <div className="row">
                        <div className="col l3 hide-on-med-and-down"></div>
                        <div className="input-field col s12 l6"> 
                            <input id="password" type="password" className="validate inputBar"/>
                            <label htmlFor="password">PASSWORD</label>
                        </div>
                        <div className="col l3 hide-on-med-and-down"></div>
                    </div>
                    <div>
                        {/* <a className="button loginSignupBtn" href="/dashboard">LOGIN</a> */}
                        <span className="button loginSignupBtn" onClick={() => this.handleFormSubmit()}>LOGIN</span>
                    </div>
                </form>
              <a className="loginSignupLink" href="/signup">Don't have an account? Signup</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;