import { FETCH_WEATHER } from "../actions/index";

// We want to store all weather requests the user has made, so default arg
// is an array. We concat the new data to our state because we need to return
// a brand new state, we can't mutate it. We must return a new instance of it, 
// which concat does.
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // return state.concat(action.payload.data);
      // But we can use es6 to do this in another way
      // This unpacks the elements in the state array into the new one
      return [ action.payload.data, ...state ]; 
  }
  return state;
}