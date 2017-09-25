import React, { Component } from 'react';
import Image from './Image';

class ImageList extends Component {

  renderImageList(images) {
    return [{}].concat(images).map(
        (image, i) =>
          (i !== 0) ? <Image id={image.id} src={image.url} onDelete={this.props.onDelete} /> : ''
      )
  }

  render() {
    return (
      <div className="columns">
        {this.renderImageList(this.props.images)}
      </div>
    );
  }
}

export default ImageList;
