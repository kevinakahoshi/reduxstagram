import React from 'react';
import Photo from './photo';
import Comments from './comments';

const Single = React.createClass({
  render() {
    const postId = this.props.params.postId;
    // Need index of post
    const index = this.props.posts.findIndex((post) => post.code === postId)
    // Get the post
    const post = this.props.posts[index];
    // Find Comments
    const postComments = this.props.comments[postId] || [];

    return (
      <div
        className="single-photo">
          <Photo
            index={index}
            post={post}
            {...this.props} />
          <Comments
            postComments={postComments}
            {...this.props} />
      </div>
    )
  }
})

export default Single;
