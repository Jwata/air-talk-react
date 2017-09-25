import React, { Component } from 'react';
import logo from './logo.svg';
import ImageList from './ImageList'
import ImageForm from './ImageForm'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [{
        id: Math.random().toString(36).substring(7),
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
      }]
    };
  }

  addImage = (url) => {
    const image = { id: Math.random().toString(36).substring(7), url: url }
    this.setState(prevState => ({
      images: prevState.images.concat(image),
    }));
  }

  removeImage = (id) => {
    this.setState(prevState => ({
      images: prevState.images.filter(image => image.id != id)
    }));
  }

  render() {
    return (
      <div>
        <div className="section">
          <h1 className="title">
            AIR Talk React serverless demo app
          </h1>
          <ImageForm onSubmit={this.addImage.bind(this)} url={this.state.url} />
        </div>
        <div className="section">
          <ImageList images={this.state.images} onDelete={this.removeImage.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
