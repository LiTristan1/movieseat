import React from 'react';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const Synopsis = () => {
    const URL = 'http://localhost:3600/Synopsis'
    
    const[current,setCurrent] = useState("");
    const{index} = useParams();
    
    useEffect(() => {
        async function getSynopsis(){
            try{
                const response = await axios.get(URL);
                console.log(response.data.find((data) => data.id === index).content)
                setCurrent(response.data.find((descrip) => descrip.id === index).content);
            }catch(err){
                console.log(err);
            }
        }

        getSynopsis();
    },[index])
  
  return (
    <div>Synopsis + {index} + {current} </div>

  )
}

export default Synopsis;