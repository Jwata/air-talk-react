import React, { Component } from 'react';
import logo from './logo.svg';
import ImageList from './ImageList'
import ImageForm from './ImageForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h1 className="title">
            AIR Talk React serverless demo app
          </h1>
          <ImageForm />
        </div>
        <div className="section">
          <ImageList />
        </div>
      </div>
    );
  }
}

export default App;
