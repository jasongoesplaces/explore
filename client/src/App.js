import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lander from "./pages/Lander";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Lander} />
        <Route exact path="/books" component={Lander} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
