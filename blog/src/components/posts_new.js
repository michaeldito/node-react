import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  // field: Contains some event handlers that we need to wire up
  // to the jsx that we are returning.
  // field.input: An event handler that contains a bunch of
  // different props. By doing ... we are saying field.input is an object
  // and we want all of the diff properties in the object to be communicated
  // as props to the input tag.
  // Instead of typing onChange={field.input.onChange}, etc. we just do ...
  renderField(field) {
    // using destructuring to access properties off of nested objects
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ?  'has-danger': ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ' '}
        </div>
      </div>
    );
  }
// meta is added from our validate function
// if the user has touched the field and moved away, show errors, else show nothing

onSubmit(values) {
  // Programmatic Navigation: Used when the user is sent back to the home
  // page upon submitting a post. Only navigate after a post has been created.
  // The history.push() function helps us do that, provide push with a valid
  // Route defined in BrowserRouter in index.js
  this.props.createPost(values, () => {
    this.props.history.push('/');
  });
}

// We can pass arbitrary arguments to the Field component that get attached
// to feild and can be used in the renderField function. Use any property name 
// you want. Here we use label.
  render() {
    const { handleSubmit } = this.props;

    return (
      // Since redux form doesn't handle submitting a form, we need to
      // pass our defined onSubmit function, and pass it to handleSubmit.
      // Redux form will call handleSubmit if no errors are present.
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Categories" name="categories" component={this.renderField} />
        <Field label="Post Content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}
// Field: used to specify an input inside of the form. It doesn't know how
// to display itself on the screen, only how to interact with Redux Form.
// component: a function that will return some jsx that will be used to
// show the Field on the screen.

// The name property, and the property we use in the validate function must
// be identicaly, because the errors are passed to the renderField function,
// where we can display them on the screen.

// This helper function will be called automatically during the forms lifecycle
// whenever the user tries to submit the form.
// values: an object that contains all of the values that the user has entered
// in the form.
// We need to return an object that we create. This object needs to communicate
// with reduxForm, letting it know of any errors we find.
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }

  // if errors is empty, form is ok to submit
  // else, redux form assumes form is invalid
  return errors;
}

// This helper allows redux form to communicate directly from the component to
// the reducer that we have already set up. We treat it like connect(). It
// wraps the PostsNew component.
// form: The name of the form (must be unique)
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost })(PostsNew)
);

// How do we combine reduxForm with our connect? We need to set this up so 
// that we can modify our state array of posts upon submitting a new post
// to the api.