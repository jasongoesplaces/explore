import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
    const Auth = new AuthService();

    return class AuthWrapped extends Component {
        state = {
            confirm: null,
            loaded: false
        }

        componentDidMount() {
            if(!Auth.loggedIn()) {
                this.props.history.push('/login');
            }
            else{
                try{
                    const confirm = Auth.getConfirm();
                    console.log("Confirmation: ", confirm)
                    this.setState({
                        confrim: confirm,
                        loaded: true
                    })
                }
                catch(err) {
                    Auth.logout();
                    this.props.history.replace('/login')
                }
            }
        }

        render() {
            if(this.state.loaded === true) {
                if(this.state.confirm) {
                    return (
                        <AuthComponent history={this.props.history} confirm= {this.state.confirm} />
                    )
                }
                else{
                    return null
                }
            }
            else{
                return null
            }
        }
    }
}