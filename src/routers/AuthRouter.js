import React from 'react'
import { Transition } from '@headlessui/react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import RegisterScreen from '../components/auth/RegisterScreen'

import '../styles/components/auth.css'

const AuthRouter = ({ ...rest }) => {

  return (
    <Transition
      show={true}
      as="div"
      enter="transition ease-out duration-500 "
      enterFrom=" opacity-0 scale-95"
      enterTo="opacity-100 scale-100 "
    >
      <div className="auth-main">
        <div className="auth-box-container">
          <Switch>
            <Route
              exact path="/rick-and-morty-app/auth/login"
              {...rest}
              component={LoginScreen}
            />
            <Route
              exact path="/rick-and-morty-app/auth/register"
              {...rest}
              component={RegisterScreen}
            />
            <Redirect to="/rick-and-morty-app/auth/login" />
          </Switch>
        </div>
      </div>
    </Transition>
  )
}

export default AuthRouter
