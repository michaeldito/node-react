import axios from 'axios';

const API_KEY = 'ac626222f2746960e95c264fffeb80ab';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const COUNTRY_CODE = 'us';

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Remember: Action Creators always have to return an Action, and
// an action is an object which ALWAYS has to have a type.
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE}`;
  const request = axios.get(url); // asynchronous get request that returns a promise

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// A Promise doesn't actually contain our data, notice that we are returning
// the promise as the payload. If the payload is a Promise, Redux stops the
// action and sends it to our Middleware. The promise is unwrapped, resolved,
// and the request from the server is now the payload, which gets sent to
// the reducers. Redux-Promise middleware does all of this for us.