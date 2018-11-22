import React from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import { connect } from 'react-redux'
import TextField from '../components/TextField'

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
      dispatch({
        type: 'AUTHENTICATE',
        payload: { userData: { email, password } },
      })
      return navigate('/', { replace: true })
    },
    onChange: ({ name, value }) =>
      dispatch({ type: 'ON_INPUT_CHANGE', payload: { name, value } }),
  })
)(Login)
