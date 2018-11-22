import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import { connect } from 'react-redux'

const IndexPage = props => (
  <Layout>
    <h1>Welcome</h1>
    <p>Now go login and do something great.</p>
    <Link to="/login/">
      <button> login</button>
    </Link>
    <Link to="/app/profile">
      <button>profile</button>
    </Link>
  </Layout>
)

export default IndexPage
