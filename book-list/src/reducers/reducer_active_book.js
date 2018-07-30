// reducers are only ever called when an action occurs
// state argument is not application state, only the state
// this reducer is responsible for
// if state is undefined when passed, set it to null
// if the action is BOOK_SELCTED return the payload,
// otherwise don't do anythin, just return the state as is
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}