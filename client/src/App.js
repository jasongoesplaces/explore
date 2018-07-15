import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lander from "./pages/Lander";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Guides from "./pages/Guides"

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Lander} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/guides" component={Guides} />
      </Switch>
    </div>
  </Router>
);

export default App;
