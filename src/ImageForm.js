import React, { Component } from 'react';

class ImageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  onChange = event => {
    this.setState({ url: event.target.value });
  }

  onSubmit = async event => {
    event.preventDefault();
    this.props.onSubmit(this.state.url);
    this.state.url = ""
    this.forceUpdate();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="field">
          <label className="label">
            Image URL
          </label>
          <div className="control has-icons-left">
            <input className="input" placeholder="URL" type="url" value={this.state.url} onChange={this.onChange} />
            <span className="icon is-small is-left">
              <i className="fa fa-picture-o" />
            </span>
          </div>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-primary" type="submit">
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
