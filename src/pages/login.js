import React from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import { connect } from 'react-redux'
import TextField from '../components/TextField'
import { onAuth, onInputChange } from '../state/createStore'

const Login = props => {
  return (
    <Layout>
      <TextField name="userName" label="Username" onChange={props.onChange} />
      <TextField name="passWord" label="Password" onChange={props.onChange} />
      <br />
      <button
        onClick={props.onClick({
          email: props.userName,
          password: props.passWord,
        })}
      >
        Submit
      </button>
    </Layout>
  )
}

export default connect(
  ({ loginForm: { userName, passWord } }) => ({ userName, passWord }),
  dispatch => ({
    onClick: ({ email, password }) => () => {
      dispatch(onAuth({ email, password }))
      return navigate('/', { replace: true })
    },
    onChange: ({ name, value }) => dispatch(onInputChange({ name, value })),
  })
)(Login)
