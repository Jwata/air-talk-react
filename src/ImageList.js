import React, { Component } from 'react';

class ImageList extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-3">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
              </figure>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <button className="button is-danger">
                  Delete
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageList;
