import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Route is the workhorse.
// It's a react component that can render any component.
// It provides the configuration that allows components to render
// based on what URL they are in.
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() { return <div>Hello</div> }
}

class Goodbye extends React.Component {
  render() { return <div>Goodbye!</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

// Using Route, we tie a component to a route. So when a user goes to that
// route, the component will render.