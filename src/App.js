import React, { Component } from 'react';
import { listImages, addImage, deleteImage } from './awsApi';
import logo from './logo.svg';
import Image from './Image';
import ImageForm from './ImageForm';
import fire from './fire';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  async componentDidMount() {
    const imagesRef = fire.database().ref('images');
    imagesRef.on('child_added', (snapshot) => {
      const image = { url: snapshot.val(), id: snapshot.key };
      this.setState({ images: [image].concat(this.state.images) });
    });
    imagesRef.on('child_removed', (snapshot) => {
      const id = snapshot.key;
      this.setState(prevState => ({
        images: prevState.images.filter(image => image.id != id)
      }));
    });
  }

  renderImageList() {
    return [{}].concat(this.state.images).map(
        (image, i) =>
          (i !== 0) ? <Image id={image.id} src={image.url} onDelete={this.deleteImage.bind(this)} /> : ''
      )
  }

  async addImage(url) {
    fire.database().ref('images').push(url);
  }

  async deleteImage(id) {
    fire.database().ref(`images/${id}`).remove();
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
