import React from 'react';
import  {useState,useEffect} from 'react';
import './Home.css';
//components
import Box from '../components/MovieBox';

//Images
import DeadPool from '../images/DeadPool.jpg';
import Mulan from '../images/Mulan.jpg';
import Spiderman from '../images/Spiderman.jpg';
import Transformers from '../images/Transformers.jpg';
import InsideOut2 from '../images/InsideOut2.jpg';
import Alien from '../images/Alien.jpg';

const Home = () => {
  //Keeps track of current image 
  const [currentImage,setCurrentImage] = useState(DeadPool)
  //stores all the images ******************** backend
  const images = [DeadPool,Mulan,Spiderman,Transformers,InsideOut2,Alien]
  //stores track of current image to display
  const [currentNumber,setCurrentNumber] = useState(0);

  //Make slide auto update each 2 seconds unless clicked upon
  useEffect(() => {
    const autoSlide = setTimeout(() => {
      if(currentNumber <= images.length - 1){
        handleImageChange(currentNumber + 1);
        setCurrentNumber(currentNumber + 1);
        
      }
      else{
        setCurrentNumber(0);
        handleImageChange(0);
      }
    },2000);

    return () => clearTimeout(autoSlide);
  },[currentNumber])
  function handleImageChange(number){
    
    console.log(number);
    setCurrentNumber(number);
    setCurrentImage(images[number])

    //Remove active bubble class from all elements
    const bubbleContainer = document.querySelector('.Bubble-Container').children;
    console.log(bubbleContainer.length);
    for(let i = 0; i < bubbleContainer.length; i++){
      bubbleContainer[i].classList.remove('Active-Bubble')
    }
    //Add active bubble class to all elements
    switch(number){
      case 0: 
        {
          const first = document.getElementById('first');
          first.classList.add('Active-Bubble');
          break;
        }
      case 1: {
        const second  = document.getElementById('second');
        second.classList.add('Active-Bubble')
        break;
      }
      case 2: {
        const third = document.getElementById('third');
        third.classList.add('Active-Bubble');
        break;
      }
      case 3: {
        const fourth = document.getElementById('fourth');
        fourth.classList.add('Active-Bubble')
        break;
      }
      case 4: {
        const fifth = document.getElementById('fifth');
        fifth.classList.add('Active-Bubble');
        break;
      }
      case 5: {
        const sixth = document.getElementById('sixth');
        sixth.classList.add('Active-Bubble');
        break;
      }
        
    }

    setTimeout(() => {

    },1000);
  }

 
  return (
    <div>
        <div className = 'Slide-Container'>
            <div className = 'Image-Container'>
                <img src = {currentImage} alt = 'image here'></img>
            </div>
            <div className = 'Bubble-Container'>
                <span id = 'first' onClick = {() => handleImageChange(0)}></span>
                <span id = 'second' onClick = {() => handleImageChange(1)}></span>
                <span id = 'third' onClick = {() => handleImageChange(2)}></span>
                <span id = 'fourth' onClick = {() => handleImageChange(3)}></span>
                <span id = 'fifth' onClick = {() => handleImageChange(4)}></span>
                <span id = 'sixth' onClick = {() => handleImageChange(5)}></span>
            </div>
        </div>

        <div className = 'Movie-Selection'>
            {
              images.map((image,index) => {
                return(
                  <Box key = {index} index = {index} image = {image}/>
                )
              })
            }
        </div>

        <div className = 'More-Info-Box'>
            <div className = 'More'>
              <h1>More</h1>
              <ul>
                <li><a>Health and Safety</a></li>
                <li><a>Help Centre</a></li>
                <li><a>Careers</a></li>
              </ul>

            </div>
            <div className = 'Corporate-Info'>
              <h1>Corporate-Info</h1>
              <ul>
                <li><a>Corporate Sales and Rentals</a></li>
                <li><a>Corporate Information</a></li>
                <li><a>Press Room</a></li>
                <li><a>Investing Opportunities</a></li>
              </ul>
              
            </div>
            <div className = 'Theatre-Information'>
                <h1>Theatre Information</h1>
                <ul>
                  <li><a>Find a Theatre</a></li>
                  <li><a>Accessibility</a></li>
                  <li><a>Book a Party</a></li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Home;