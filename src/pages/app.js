import React from 'react'
import { Link } from 'gatsby'
import { Router } from '@reach/router'

import Layout from '../components/layout'
import Image from '../components/image'
import { connect } from 'react-redux'
import PrivateRoute from '../components/PrivateRoute'
import Profile from '../components/profile'

const IndexPage = props => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
    </Router>
  </Layout>
)

export default IndexPage
