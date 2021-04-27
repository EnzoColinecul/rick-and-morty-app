import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import HomeScreen from '../components/home/HomeScreen'

const Routers = () => {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route path="/home" component={HomeScreen} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  )
}
export default Routers
