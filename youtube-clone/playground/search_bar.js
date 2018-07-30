import React, { Component } from 'react';

/* This is a class based compoment. We use them when we need to be aware of state.
 * They react to user events. Here, we make use of state by updating the user input 
 * whenever the state changes. Whenever the user enters text, we first update the state, 
 * which causes the entire component to re-render. We make the input element a controlled
 * component by telling it to receive it's value from state.
 */

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value }) }
        />
      </div>
    );
  }
}

export default SearchBar;