import React from "react";

const SignupView = ({ onSubmit }) => {
    return (
        <div className="landerPage">
        <div className="landerCard">
            <div className="container landerContainer">
            <div className="signupMenu">
                <img className="logoLander" src="./images/logoLander.png"/>
            </div>
            <div className="landerContent">
                <div className="signupDiv"></div>
                <form className="col s12 signupField" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col l3 hide-on-med-and-down"></div>
                        <div className="input-field col s12 l6"> 
                            <input
                                className="validate inputBar"
                                name="email"
                                type="text"
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
                                name="password"
                                type="password"
                            />
                            <label htmlFor="password">PASSWORD</label>
                        </div>
                        <div className="col l3 hide-on-med-and-down"></div>
                    </div>
                    <div>
                        <button className="form-submit button loginSignupBtn">SIGN UP</button>
                    </div>
                </form>
                <a className="loginSignupLink" href="/login">Already have an account? Login</a>
            </div>
            </div>
        </div>
        </div>
    );
}
export default SignupView;