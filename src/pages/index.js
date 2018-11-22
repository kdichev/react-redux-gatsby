import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import { connect } from 'react-redux'

const IndexPage = props => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    {props.count}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default connect(state => ({ count: state.counter.count }))(IndexPage)
