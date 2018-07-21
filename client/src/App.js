import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lander from "./pages/Lander";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Guides from "./pages/Guides";
import Events from "./pages/Events"

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Lander} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/guides" component={Guides} />
        <Route exact path="/events" component={Events} />
      </Switch>
    </div>
  </Router>
);

export default App;
