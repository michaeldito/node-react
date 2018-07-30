import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // When we call onInputChange from the form, we lose the value of 'this'.
    // We need to bind the function to 'this' object and replace the existing
    // function with it. We are basically overriding this local method. 
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // use the event object to prevent the browser from submitting the form
    event.preventDefault();

    // we need to go and fetch weather data by making our API request
    // we need to connect our SearchBar to redux using 'connect'
    // we need to bind the fetchWeather action creator as a property to this 
    // container
    this.props.fetchWeather(this.state.term);
    // clear the search bar for the user
    // the component will re-render because it's state changed, and appear empty
    this.setState({ term: '' }); 
  }

  render() {
    return (
      // we need to handle the submit event on the form, lets pass a new
      // function handler
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          // below is what makes this form controlled
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// A controlled field is a form element where the value of the input
// is set by the state of a component. To create a comtrolled component
// we need to set the state whenever the input changes.
// Initialize state inside of our constructor

// IMPORTANT JAVASCRIPT RULE:
// If you have a callback, that makes reference to this, you most likely
// need to bind it to 'this'.

// This causes the action creator to make sure that the action flows
// to the middleware and then the reducers of ourredux application.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null as the first argument?
// Whenever we are passing in a function that is supposed to map our
// dispatch to the props of our container, it goes in the second argument.
// A function that maps state to props goes first, and we don't need any.
// See book-list/src/containers/book-list.js for an example.
export default connect(null, mapDispatchToProps)(SearchBar);