import React from 'react';
import {useParams} from 'react-router-dom';
import Seat from '../components/Seat';
import{useEffect} from 'react';
import './ReserveSeat.css';
import axios from 'axios';
const ReserveSeat = () => {
  const{index} = useParams();
  const arr = Array.from({length:2 * 26}, (_,i) => i + 1);
  const arr1 = Array.from({ length: 12 * 26 }, (_, i) => i + 53);
  const arr2 = Array.from({length:2 * 26}, (_,i) => i + 365);
  

 

  //Load data from api
  useEffect(() => {
      console.log(arr);
  },[])

  return (
    <div>

      <div className = 'seats-container'>

      
        <div className = 'seat-grid'>
            {arr.map((seat) => {
              return(
                <Seat key = {seat} index = {seat} section = {1}/>
              )
            })}

        </div>
        <div className = 'seat-grid1'>
            {arr1.map((seat) => {
              return(
                <Seat key = {seat} index = {seat} section = {2}/>
              )
            })}
        </div>
        <div className = 'seat-grid2'>
            {arr2.map((seat) => {
              return(
                <Seat key = {seat} index = {seat} section = {3}/>
              )
            })}
        </div>
      </div>
      <div className = 'screen'>Screen</div>
    </div>
  )
}

export default ReserveSeat;