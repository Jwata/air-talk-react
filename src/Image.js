import React, { Component } from 'react';

class Image extends Component {

  onDelete = async event => {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <div className="column is-3">
        <div className="card">
          <div className="card-image">
            <figure className="image is1by3">
              <img src={this.props.src} />
            </figure>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <button className="button is-danger" onClick={this.onDelete}>
                Delete
              </button>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Image;
