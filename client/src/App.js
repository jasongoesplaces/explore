import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lander from "./pages/Lander";
import Login from "./pages/Login";
import Signup from "./pages/Signup"

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Lander} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  </Router>
);

export default App;
