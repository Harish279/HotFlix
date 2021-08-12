import axios from 'axios';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useState } from "react";
import {
    img_300,
    noPicture
} from "../config/config";

const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src="path-to-img" onDragStart={handleDragStart} />,
//   <img src="path-to-img" onDragStart={handleDragStart} />,
//   <img src="path-to-img" onDragStart={handleDragStart} />,
// ];

const Carousel = ({media_type,id}) => {

    const [credits,setCredits]=useState();
    const items = credits?.map((c) => (
        <div className="carouselItem">
          <img
            src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
            alt={c.name}
            onDragStart={handleDragStart}
            className="carouselItem__img"
          />
          <b className="carouselItem__txt">{c?.name}</b>
        </div>
      ));
    
      const responsive = {
        0: {
          items: 3,
        },
        512: {
          items: 5,
        },
        1024: {
          items: 7,
        },
      };

    const fetchCredits= async() =>{
        const {data} =await axios.get (` 
        https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=b860ec64c814a936a10ca437e2c910eb&language=en-US`)
       setCredits(data.cast);
    // eslint-disable-next-line
        
    }
  useEffect(() =>{
    // eslint-disable-next-line
      fetchCredits();
    // eslint-disable-next-line
  },[])



  return (
    <AliceCarousel 
        autoPlay 
        responsive={responsive} 
        infinite 
        mouseTracking 
        items={items} 
    />
  );
}

export default Carousel;