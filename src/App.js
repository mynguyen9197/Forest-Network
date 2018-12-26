import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import './App.css'
import Followers from './containers/followers'
import Following from './containers/following'
import Home from './containers/home'
import Register from './components/register/index'
import Login from './components/login'
import SignUp from './components/signup'
import Transaction from './containers/payment'
import NewFeed from './containers/newfeed'

const checkAuth = () => {
  const secret = localStorage.getItem('secret')
  if(secret){
    return true
  } else {
    return false
  }
}

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login",
          state: { from: props.location }
        }}
        />
        )
      }
    />
)

const App = () => (
  <Router>
      <Router>
        <Switch>
          <AuthRoute exact path="/accounts/:id" component={Home} />
          <AuthRoute exact path="/transactions" component={Transaction} />
          <AuthRoute exact path="/followers" component={Followers} />
          <AuthRoute exact path="/following/:id" component={Following} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp}/>
          <AuthRoute exact path="/" component={NewFeed}/>
        </Switch>
      </Router>
  </Router>
)

export default App;
