import React from 'react';
import Photo from './photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div
        className="photo-grid">
          {this.props.posts.map((post, index) =>
            <Photo
              key={index}
              index={index}
              post={post}
              {...this.props} />)}
      </div>
    )
  }
})

export default PhotoGrid;
