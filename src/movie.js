import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    } 
}

// class MoviePoster extends Component{

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }
//     render(){
//         return(
//             <img src={this.props.poster} alt="Movie poster" />
//         )
//     }
// }

function MoviePoster({poster}){ 
    return (
        <img src={poster} alt="Movie poster" />
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}
 
export default Movie