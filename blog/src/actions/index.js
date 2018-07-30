import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST  = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY  = '?key=DIGGIDYDOODYHOODY123';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  // axios.post returns a promise, so we can then() call the callback after
  // we get our request. Now we'll be returned to the home page of posts
  // after we submit a new post!
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());
    
  return {
    type: DELETE_POST,
    payload: id
  };
}