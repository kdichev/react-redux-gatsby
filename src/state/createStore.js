import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

const auth = (
  state = {
    isAuth: false,
    userData: null,
  },
  action
) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      const { userData } = action.payload
      return { ...state, isAuth: true, userData: userData }
    case 'LOGOUT':
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
    case 'ON_INPUT_CHANGE':
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}

const configureStore = () =>
  createStore(combineReducers({ auth, loginForm }), devToolsEnhancer())

export default configureStore
