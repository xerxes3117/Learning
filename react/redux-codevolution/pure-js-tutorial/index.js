const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()

//Initial store states
const initialCakeState = {
  numberOfCakes: 10
}
const initialIcecreamState = {
  numberOfIcecream: 5
}

//Action types
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = "BUY_ICECREAM";

//Action creator
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'Action for buying cake'
  }
}
const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    info: 'Action for buying icecream'
  }
}

//Reducers
const cakeReducer = (state = initialCakeState, action) => {
  // console.log("calling reducer, action: ", action)
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      }
    default:
      return state //This case runs on action type INIT during createStore() call
  }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
  // console.log("calling reducer, action: ", action)
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1,
      }
    default:
      return state //This case runs on action type INIT during createStore() call
  }
}

/**
 * 1) This combines the states used by all reducer into one single store state
 * 2) In components, the states can be accessed through key value defined in combineReducers function (e.g. cake and icecream below). 
 *    eg. to access numberOfIcecream we use -> state.icecream.numberOfIcecream
 * 3) Any action dispatched to rootReducer is recieved by all reducers inside. However, only the reducers containing that action do something.
 *    Otherwise, it is ignored.
 */
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
})

/**
 * Below line defines the initial state for redux and also connects reducer for future updates to store state
 * This also calls the reducer function with a INIT action for fetching and setting initial state of store
 */
const store = createStore(rootReducer, applyMiddleware(logger));


console.log("Initial state: ", store.getState())
// console.log("store: ", store)

var unsubscribe = store.subscribe(() => {
  // console.log("Updated state: ", store.getState())
}) //The callback inside store.subscribe runs whenever store state is updated

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()