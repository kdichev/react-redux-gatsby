import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

const initialState = { count: 0 }

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
  return state
}

const configureStore = () =>
  createStore(combineReducers({ counter }), devToolsEnhancer())

export default configureStore
