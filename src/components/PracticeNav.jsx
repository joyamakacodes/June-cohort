import { Link } from "react-scroll";
import { NavData } from "../data/PrcticeNav";
const PracticeNav = () => {
  return (
    <div>
      <ul style={{listStyle: 'none',display: 'flex', gap: '4px', justifyContent: 'space-between'}}>
      {NavData.map((data)=>(
       <Link to={data.link} key={data.id}>
        <li style={{margin: '4px'}}>
          {data.title}
        </li>
       </Link>
        
      ))}
      </ul>
    </div>
  );
}

export default PracticeNav;
