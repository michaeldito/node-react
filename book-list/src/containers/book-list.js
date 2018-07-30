import React, { Component } from 'react';
import { connect } from 'react-redux';

// We need to bind our selectBook action to our component
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// We need to promote a component to a container.
// A container is a component that has a direct connection to the 
// state managed by Redux. We promote booklist with connect.

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever gets returned from here will show up as
  // props inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on
// the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, result should be passed to
  // all of our reducers. Take this action, pass on to all reducers - it dispatches it.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Args:
// (1) function
// (2) component
// (produces): a container 
// Connect our view and our state
// Whenever our state changes, BookList will automatically rerender
// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);