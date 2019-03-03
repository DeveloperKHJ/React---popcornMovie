import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './movie';




class App extends Component {

  state = { 
  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map( movieInfo =>{
      return (<Movie 
        title={movieInfo.title_english} 
        poster={movieInfo.medium_cover_image} 
        key={movieInfo.id} 
        genres={movieInfo.genres}
        synopsis={movieInfo.synopsis}
      />
      ); 
    });
    return movies;
  };
  
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    });
  };
 
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(Response => Response.json())
    .then(json => json.data.movies )
    .catch(err => console.log(err))
  }
  
  render() {
    const {movies} = this.state;  
    return (
      <div className={movies? "App" : "App--loading"}>
        {movies? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
