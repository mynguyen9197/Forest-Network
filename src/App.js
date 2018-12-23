import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import './App.css'
import Followers from './containers/followers'
import Following from './containers/following'
import Home from './containers/home'
import Detail from './containers/detail'
import Register from './components/register/index'
import Login from './components/login'
import SignUp from './components/signup'
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
          <AuthRoute exact path="/" component={Home} />
          <AuthRoute exact path="/followers" component={Followers} />
          <AuthRoute exact path="/following" component={Following} />
          <AuthRoute exact path="/:account/status/:id" component={Detail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/newfeed" component={NewFeed}/>
        </Switch>
      </Router>
  </Router>
)

export default App;
