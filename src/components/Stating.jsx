import { useState } from "react";
import { CallContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
const Stating = () => {
 const {email, setEmail, name, setName}= CallContext()
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const [house, setHouse]= useState({
    sittingroom: '',
    color: '',
    people: 0
  })
  const [anytype, setAnytype] = useState(null)
  const navigate = useNavigate()
  const handleNameChange=()=>{
    setName('Joy')
  }
  const HandleSubmit=(e)=>{
    e.preventDefault()
   
    navigate("/services")
  }
  const Increment=()=>{
    setCount(count+1)
  }
  const Decrement=()=>{
    setCount(count-1)
  }
  const HandleShow= ()=>{
    setShow(!show)
  }
  const HandleNull= ()=>{
    setAnytype('Micheal')
  }
  const handleObject=()=>{
    setHouse(
  {
    ...house,
    sittingroom: name,
    color: email,
    people: count
  }
    )
  }
  return (
    <div>
      <p>{name}</p>
      <p>This is count: {count}</p>
      <p>This is any: {anytype}</p>
      <ul>
        <li><h2>Name: {house.sittingroom} </h2></li>
        <li>itis painted with{house.color}</li>
        <li>we are {house.people} individuals in my family</li>
      </ul>

      <button onClick={handleNameChange}>click me!</button>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decrease</button>
      {
        show && (<p>This is the modal</p>)
      }
      <button onClick={HandleShow}>Show this modal</button>
      <button onClick={HandleNull}>this is null</button>
      <button onClick={handleObject}>show object</button>
      <form onSubmit={HandleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      <br />
      <label htmlFor="email">Email</label>
      <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
      </form>
      <div>
        <p>{name}</p>
        <p>{email}</p>

      </div>
    </div>
  );
}

export default Stating;
