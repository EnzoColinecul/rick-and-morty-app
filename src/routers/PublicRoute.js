import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'

export const PublicRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route {...rest}
      component={(props) => (
        <Component {...props} />
      )}
    />

  )
}

PublicRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}