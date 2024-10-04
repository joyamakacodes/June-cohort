import { CardData } from "../data/CardData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Cards = ()=>{
  return(
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {
        CardData.map((card)=>(
          <Link key={card.id} to={`/cardDetails/${card.id}`} className="text-black m-4 ">
            <div className="border border-gray-900 rounded-lg p-4 h-[300px] md:h-[400px]">
            <FontAwesomeIcon icon={card.icon}/>
            <h4 className="text-sm md:text-3xl">{card.title}</h4>
            <p>{card.desc}</p>
          </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Cards;