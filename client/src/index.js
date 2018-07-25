import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './pages/About';
import Guides from './pages/Guides';
import Events from './pages/Events';
import Lander from './pages/Lander'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard'
import GuidesDetail from './pages/GuideDetail'
import GuidesLM from './pages/GuideLM'
import registerServiceWorker from './registerServiceWorker';

/* Here we will create our routes right off the bat. */
ReactDOM.render(
<Router>
    <div>
        <Route exact path="/" component={Lander} />
        <Route exact path="/about" component={About} />
        <Route exact path="/guides" component={Guides} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/guides/:location" component={GuidesDetail} />
        <Route exact path="/activity/:id" component={GuidesLM} />
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
