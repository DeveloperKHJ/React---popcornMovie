import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';




class App extends Component {

  state = { 
  }


  _renderMovies = () =>{
    const movies = this.state.movies.map((movieInfo, index) =>{
      return <Movie title={movieInfo.title} poster={movieInfo.poster} key={index}/> 
    })
    return movies
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "The Matrix",
            poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
          },
          {
            title: "The Big short",
            poster: "https://upload.wikimedia.org/wikipedia/en/1/16/The_Big_Short_%282015_film_poster%29.png"
          },
          {
            title: "The Oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
          },
          {
            title: "Train to Busan",
            poster: "https://upload.wikimedia.org/wikipedia/en/9/95/Train_to_Busan.jpg"
          },
          {
            title: "Wreck-It Ralph",
            poster: "http://pds25.egloos.com/pds/201901/12/77/b0008277_5c3947fe62ea8.jpg"
          }
        ]
      })
    }, 4000)
  }
  
  render() {
    return (
      <div className="App">
        {this.state.movies? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
