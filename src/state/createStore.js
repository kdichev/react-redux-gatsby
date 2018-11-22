import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const AUTHENTICATE = 'AUTHENTICATE'
export const LOGOUT = 'LOGOUT'
export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE'

export const onLogout = () => ({ type: LOGOUT })

export const onAuth = ({ email, password }) => ({
  type: AUTHENTICATE,
  payload: { userData: { email, password } },
})

export const onInputChange = ({ name, value }) => ({
  type: ON_INPUT_CHANGE,
  payload: { name, value },
})

const auth = (
  state = {
    isAuth: false,
    userData: null,
  },
  action
) => {
  switch (action.type) {
    case AUTHENTICATE:
      const { userData } = action.payload
      return { ...state, isAuth: true, userData: userData }
    case LOGOUT:
      return { ...state, isAuth: false, userData: null }
    default:
      return state
  }
}

const loginForm = (
  state = {
    userName: '',
    passWord: '',
  },
  action
) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      const { name, value } = action.payload
      return { ...state, [name]: value }
    default:
      return state
  }
}

const configureStore = () =>
  createStore(combineReducers({ auth, loginForm }), devToolsEnhancer())

export default configureStore
