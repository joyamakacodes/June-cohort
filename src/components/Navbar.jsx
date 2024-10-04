import { NavData } from "../data/NavData";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  return (
    <div>
      <ul style={{listStyle: 'none',display: 'flex', gap: '4px', justifyContent: 'space-between'}}>
      {NavData.map((data)=>(
       <NavLink to={data.link} key={data.id}>
        <li style={{margin: '4px'}}>
          <FontAwesomeIcon icon={data.icon} style={{color: 'red'}}/>
          {data.title}
        </li>
       </NavLink>
        
      ))}
      </ul>
    </div>
  );
}

export default Navbar;
