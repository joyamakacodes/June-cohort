import { useState, useEffect } from "react";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  const [carousel, setCarousel] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCarousel(prev=>(prev+ 1) % CarouselData.length)
    },2000)
  
    return ()=> clearInterval(interval)
  }, [])
 
  return (
    <div>
      <img src={CarouselData[carousel].image} alt={CarouselData[carousel].title} />
      <h1>{CarouselData[carousel].title}</h1>
      <p>{CarouselData[carousel].desc}</p>
    </div>
  );
}

export default Carousel;
