import { NavData } from "../data/NavData";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ScrollBar = () => {
  return (
    <div>
      <ul style={{listStyle: 'none',display: 'flex', gap: '4px', justifyContent: 'space-between'}}>
      {NavData.map((data)=>(
       <Link to={data.link} key={data.id}>
        <li style={{margin: '4px'}}>
          <FontAwesomeIcon icon={data.icon} style={{color: 'red'}}/>
          {data.title}
        </li>
       </Link>
        
      ))}
      </ul>
    </div>
  );
}

export default ScrollBar;
