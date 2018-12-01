import React, { Component } from 'react';
import './App.css';
import Followers from './containers/FollowContainer/followers'
import Following from './containers/FollowContainer/following'
import Home from './containers/HomeContainer/home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/followers" component={Followers} />
          <Route exact path="/following" component={Following} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
