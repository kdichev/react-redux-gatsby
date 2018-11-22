import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import { connect } from 'react-redux'
import { onLogout } from '../state/createStore'

const IndexPage = ({ isAuth, logout }) => (
  <Layout>
    <h1>Welcome</h1>
    <p>Now go login and do something great.</p>
    {!isAuth ? (
      <Link to="/login/">
        <button> login</button>
      </Link>
    ) : (
      <button onClick={logout}> logout</button>
    )}
    {isAuth && (
      <Link to="/app/profile">
        <button>profile</button>
      </Link>
    )}
  </Layout>
)

export default connect(
  ({ auth: { isAuth } }) => ({ isAuth }),
  dispatch => ({ logout: () => dispatch(onLogout()) })
)(IndexPage)
