import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { connect } from 'react-redux'

const LOGIN_SLUG = `/app/login`

const PrivateRoute = ({ component: Component, location, isAuth, ...rest }) => {
  if (!isAuth && location.pathname !== LOGIN_SLUG) {
    navigate(LOGIN_SLUG, { replace: true })
    return null
  }
  return <Component {...rest} />
}

export default connect(({ auth: { isAuth } }) => ({ isAuth }))(PrivateRoute)
