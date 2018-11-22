import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

const authInitialState = {
  isAuth: false,
  userData: null,
}

const auth = (state = authInitialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      return { ...state, isAuth: true, userData: action.payload.userData }
    default:
      return state
  }
}

const loginFormInitialState = {
  userName: '',
  passWord: '',
}

const loginForm = (state = loginFormInitialState, action) => {
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
