// import Navbar from "../components/Navbar";
import { CallContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const{email, name} = CallContext()
  const navigate =useNavigate()
  const handleRoute = ()=>{
navigate("/contact")
  }
  return (
    <div>
      {/* <Navbar/> */}
      <p>welcome {name}, An OTP has been sent to {email}</p>
      <p> This is services</p>
      <button onClick={handleRoute}>GO HERE</button>
    </div>
  );
}

export default Services;
