const redux = require('redux');
const createStore = redux.createStore;

//Initial store state
const initialState = {
  numberOfCakes: 10
}

//Action types
const BUY_CAKE = 'BUY_CAKE';

//Action creator
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'Action for buying cake'
  }
}

//Reducer
const reducer = (state = initialState, action) => {
  console.log("calling reducer, action: ", action)
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

/**
 * Below line defines the initial state for redux and also connects reducer for future updates to store state
 * This also calls the reducer function with a INIT action for fetching and setting initial state of store
 */
const store = createStore(reducer)


console.log("Initial state: ", store.getState())

const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState())) //The callback inside store.subscribe runs whenever store state is updated

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()