import React from 'react';
import Photo from './photo';

const Single = React.createClass({
  render() {
    // Need index of post
    const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
    // Get the post
    const post = this.props.posts[index];
    console.log(post);
    return (
      <div
        className="single-photo">
          <Photo
            index={index}
            post={post}
            {...this.props} />
      </div>
    )
  }
})

export default Single;
