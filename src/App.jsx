import React, { Component } from "react";
import "./App.css";

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = "https://picsum.photos/200?photo=";
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";


class App extends Component {
  // 1. Declare a state object that will be used to track an array of photos
  state = {};

  // 2. Declare a life cycle method
  // This life cycle method should:
  //  - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will add that array of photos to state once received

  
  

  componentWillMount() {
    const pictures = []
    const photoIdNumbers = []
    const filenames = []
    fetch(PHOTO_LIST_URL)
    .then(res => {
      return res.json()
    })
    .then(data => {
      // console.log
      data.forEach(async photo => {
        await filenames.push(photo.filename)

        if (!photoIdNumbers.includes(photo.id)){
          photoIdNumbers.push(photo.id)
        }

        fetch(PHOTO_URL + photo.id)
        .then(res =>{
          return res
        })
        .then( data => {
          // console.log(data)

          pictures.push(data)
          // console.log(pictures)
          this.setState({photos: pictures, ids: photoIdNumbers, filenames: filenames })
        })
      })
    })
    // console.log(this.state)
  }

  render() {
    // const ids = this.state.ids

    const { photos = [] } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1>Photo Wall</h1>
          <p>
            Start by reading App.jsx and completing the numbered steps.
            Afterward, delete this paragraph. Then, open up App.css and complete
            the instructions there.
          </p>
        </header>
        <div className="collage">
          {/* We use map here because Array.prototype.map is an expression,
              * and for loops are not. You'll learn more about this soon! 
              */}
          {photos.map(photo => 
            <img alt={photo.url} key={photo.url} src={photo.url} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
