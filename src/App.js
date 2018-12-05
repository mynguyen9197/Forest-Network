import React, { Component } from 'react'
import './App.css'
import Followers from './containers/FollowContainer/followers'
import Following from './containers/FollowContainer/following'
import Home from './containers/HomeContainer/home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Detail from './containers/DetailContainer/detail'



const App = () => (
  <Router>
      <Router>
        <Switch>
          <Route exact path="/followers" component={Followers} />
          <Route exact path="/following" component={Following} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
  </Router>
)

export default App;
