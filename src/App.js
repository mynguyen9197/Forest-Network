import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import './App.css'
import Followers from './containers/followers'
import Following from './containers/following'
import Home from './containers/home'
import Detail from './containers/detail'
import Register from './components/register/index'
import Login from './components/login'

const App = () => (
  <Router>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/followers" component={Followers} />
          <Route exact path="/following" component={Following} />
          <Route exact path="/:account/status/:id" component={Detail} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
  </Router>
)

export default App;
