import React from 'react';
import './MovieBox.css';
import {Link} from 'react-router-dom';

const MovieBox = ({index,image}) => {
  ;
  return (
    <div className = 'box'>
        MovieBox
        <img src = {image}></img>
        <div className = 'button-box'>
            <button><Link className = 'movie-button' to = {`/Reserve/${index}`}>Reserve Seat</Link></button>
            <button><Link className = 'movie-button' to = {`/Synopsis/${index}`}>Synopsis</Link></button>
        </div>
        
    </div>
  )
}

export default MovieBox;