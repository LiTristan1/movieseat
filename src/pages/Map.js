import React from 'react';

import LocationMovies from './LocationMovies';
import {useState} from 'react';
import './Map.css';
const Map = () => {
  
  const locations = ["Fairview Mall","Markham","Scarborough","Don Mills", "Empress Walk", "Eglinton Town Centre",
    "Odeon Morningside","Richmond Hill","Yonge-Eglinton","Yorkdale"
  ]
  const[filtered,setFiltered] = useState(locations);
  function handleFilter(e){
    let text = e.target.value;
    console.log(text);
    setFiltered(locations.filter((location) => location.includes(text)))
  }
  return (
    <div>
        <form>
          <label htmlFor = 'searchbar'>Search</label>
          <input type = 'text' id = 'searchbar' onChange = {(e) => handleFilter(e)}></input>
        </form>
        <div className = 'location-container'>
        {filtered.length > 0 ? filtered.map((location,index) => {
          return(
            <LocationMovies location = {location} key = {index} />
          )
        }) : <p>No results match your search</p>}
      </div>
    </div>
    
  )
}

export default Map;