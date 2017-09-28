import React, { Component } from 'react';
import { listImages, addImage, deleteImage } from './awsApi';
import logo from './logo.svg';
import Image from './Image';
import ImageForm from './ImageForm';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  async componentDidMount() {
    listImages().then((images) => {
      this.setState({ images: images });
    });
  }

  renderImageList() {
    return [{}].concat(this.state.images).map(
        (image, i) =>
          (i !== 0) ? <Image id={image.id} src={image.url} onDelete={this.deleteImage.bind(this)} /> : ''
      )
  }

  async addImage(url) {
    addImage(url).then((image) => {
      this.setState(prevState => ({
        images: prevState.images.concat(image),
      }));
    });
  }

  async deleteImage(id) {
    deleteImage(id).then(() => {
      this.setState(prevState => ({
        images: prevState.images.filter(image => image.id != id)
      }));
    });
  }

  render() {
    return (
      <div>
        <div className="section">
          <h1 className="title">
            AIR Talk React Serverless Demo
          </h1>
          <ImageForm onSubmit={this.addImage.bind(this)} url={this.state.url} />
        </div>
        <div className="section">
          <div className="columns">
            {this.renderImageList()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
