import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import app from "./components/base";

import Lander from "./pages/Lander";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Logout from "./components/logout"
import Dashboard from "./pages/Dashboard";
import Guides from "./pages/Guides";
import GuidesDetail from "./pages/GuideDetail";
import Events from "./pages/Events";
// import Forum from "./pages/Forum";

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <Router>
        <div>
          <Route exact path="/" component={Lander} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            authenticated={authenticated}
          />
          <PrivateRoute
            exact
            path="/guides"
            component={Guides}
            authenticated={authenticated}
          />
          <PrivateRoute
            exact
            path="/guides/:location"
            component={GuidesDetail}
            authenticated={authenticated}
          />
          <PrivateRoute
            exact
            path="/events"
            component={Events}
            authenticated={authenticated}
          />
          {/* <PrivateRoute
            exact
            path="/forum"
            component={Forum}
            authenticated={authenticated}
          /> */}
        </div>
      </Router>
    );
  }
}
export default App;