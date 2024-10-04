import Navbar from "../components/Navbar"
import { CallContext } from "../context/Context"
const Contact = () => {
  const {name} = CallContext()
  return (
    <div>
       <Navbar/>
      <p>{name} This is contact page</p>
    </div>
  )
}

export default Contact
