import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'

const middleware = [logger]

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware)
))

export default store