import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

// Using Route, we tie a component to a route. So when a user goes to that
// route, the component will render.

// React Router 'gotcha'...

// (1) <Route path="/" component={PostsIndex} />
// (2) <Route path="/posts/new" component={PostsNew} />

// This causes both components to render on the screen.
// If we go to the /posts/new route. These paths are matched 'fuzzily'.
// Route (1) is matched when route (2) is matched because they both contain
// the leading '/'. This doesn't happen in express. The solution is to use
// another component called Switch. It takes in a collection of routes, it looks
// at the routes inside of it, and only renders the first route that matches
// the current URL. So, put the most specific routes at the top. When it
// tries to render all of it's children, it looks for the first route inside
// of it's list that matches the current URL.