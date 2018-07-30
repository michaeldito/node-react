import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  // fetch the posts the instant this component is on the screen
  componentDidMount() {
    // Only fetch the post if we don't have it!
    if (!this.props.post) {
      // match is the top level property
      // params is an object that has all the wildcard values inside of a Route
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  
  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  // When the user wants to show a post, the component renders,
  // then componentDidMount() is called, then it rerenders with
  // the post. So if we don't have the post yet, just return a
  // loading div.
  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// we just need the posts from the state object passed.
// ownProps is the props object that is going to PostsShow::render
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
