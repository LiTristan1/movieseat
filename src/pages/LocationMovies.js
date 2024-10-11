import React from 'react'
import {useParams} from 'react-router-dom';
import './LocationMovies.css';
const LocationMovies = ({location,key}) => {
  return (
    <div className = 'location'>{location}</div>
  )
}

export default LocationMovies;