import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'
import Image from './image'
import { connect } from 'react-redux'
import TextField from './TextField'

const Profile = ({ isAuth, userData }) => (
  <div>
    <TextField value={userData.email} label="your email" />
    <TextField value={userData.password} label="your password" />
  </div>
)

export default connect(state => ({
  isAuth: state.auth.isAuth,
  userData: state.auth.userData,
}))(Profile)
