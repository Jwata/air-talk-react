import React, { Component } from 'react';

class ImageForm extends Component {
  render() {
    return (
      <form>
        <div className="field">
          <label className="label">
            Image URL
          </label>
          <div className="control has-icons-left">
            <input className="input" placeholder="URL" type="url" name="url" />
            <span className="icon is-small is-left">
              <i className="fa fa-picture-o" />
            </span>
          </div>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-primary">
                Add Image
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default ImageForm;
