import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDxuhgahrSrABxwrc9Y5wTA3_fBWZQ0Dsc';

/* Our application starts here, where we define a base component called App.
 * We import our SearchBar component above, and render it inside of App.
 * Right now App is a functional compoment because it has no state.
 * Functional components are used when we just need to render jsx, and
 * produce html. They can also contain class based components, as we've 
 * demonstrated here.
 */
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

/* Take this component's generated HTML and put it on the page
 * (in the DOM)
 */
ReactDOM.render(<App />, document.querySelector('.container'));

// Covered So Far:
// JSX
// Components
// State
// Classes
// Arrow functions
// Import and Export Statements
