import { useParams } from "react-router-dom";
import { CardData } from "../data/CardData";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CardDetails = () => {
  const {id} = useParams()
  const [card, setCard]= useState({})
  useEffect(()=>{
    const display= CardData.find((data)=>data.id=== parseInt(id))
    if(display){
      setCard(display)
    }
  },[id])
  return (
    <div>
     <FontAwesomeIcon icon={card.icon}/>
     <h1>{card.title}</h1>
     <p>{card.desc}</p>
    </div>
  );
}

export default CardDetails;
