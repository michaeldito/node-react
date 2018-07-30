import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

// Default our state to be an object, because we're going
// to have an object that maps keys to posts.
export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      // Use a helper to delete a post from our local copy
      // If the state object has a key of the action.payload.id, drop it
      return _.omit(state, action.payload);
    case FETCH_POSTS:
      // Return an object that maps keys to objects, where the key
      // is the id feild of each object in the list
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      // ...state means take all of the existing posts we have and put
      // them in the object we're going to return
      const post = action.payload.data;
      // We could do this, but we can use es6 below
      // const newState = { ...state,  };
      // newState[post.id] = post;
      // return newState;
      //      console.log({ ...state, [post.id]: post };)
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}