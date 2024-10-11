import React from 'react'
import { MdEventSeat } from "react-icons/md";
import {useState,useEffect} from 'react';
import axios from 'axios';
import './Seat.css';
const Seat = ({index,section}) => {
    
    const[reserved,setReserved] = useState(null);
    const[data,setData] = useState(null);
    //Get status

   
    useEffect(() => {
      async function getStatus(){
        try{
          const response = await axios.get('http://localhost:3600/spidermanSeats');
          const data = response.data;
          console.log(data);
          console.log(data[0].arrAvailable);
          let relevantArr;

          if(index <= 52){
            relevantArr = data[0].arrAvailable;
            setReserved(relevantArr[index]);
          }
          else if(index <= 364){
            relevantArr = data[1].arrAvailable;
            setReserved(relevantArr[index - 53]);
          }
          else if(index <= 416){
            relevantArr = data[2].arrAvailable;
            setReserved(relevantArr[index-365]);
          }
        }catch(err){
          console.log(err);
        }
      }

      getStatus();
    },[])

    useEffect(() => {
      console.log(reserved);
    },[reserved]);
    
    async function selected(e){
        setReserved(!reserved);
        console.log(index);
        let newArr;
        try{
          const response = await axios.get('http://localhost:3600/spidermanSeats');
          const data = response.data;
          newArr = [...data];
          console.log("New: " + newArr);
          let relevantArr;

          switch(section){
            case 1: {
              relevantArr = data[0].arrAvilable;
              relevantArr[index] = !relevantArr[index];
              newArr[0].arrAvilable = relevantArr;
              break;
            }
            case 2: {
              relevantArr = data[1];
              relevantArr[index] = !relevantArr[index - 53];
              newArr[1].arrAvilable = relevantArr;
              break;
            }
            case 3: {
              relevantArr = data[2];
              relevantArr[index] = !relevantArr[index-365];
              newArr[2].arrAvilable = relevantArr;
              break;
            }
          }
        }catch(err){
          console.log(err);
        }

        
        
        console.log("New" + Object.values(newArr[0]));
        await axios.put('http://localhost:3600/spidermanSeats',JSON.stringify(newArr));
        
    
    }
        
        return (
    <div>
        <MdEventSeat className = {reserved? 'reserved': 'seat'}size = {25} type = 'button' onClick = {(e) => selected(e)}/>
    </div>
  )
}

export default Seat;