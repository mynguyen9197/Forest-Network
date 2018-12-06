import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import './App.css'
import Followers from './containers/followers'
import Following from './containers/following'
import Home from './containers/home'
import Detail from './containers/detail'


const App = () => (
  <Router>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/followers" component={Followers} />
          <Route exact path="/following" component={Following} />
          <Route exact path="/:account/status/:id" component={Detail} />
        </Switch>
      </Router>
  </Router>
)

export default App;
