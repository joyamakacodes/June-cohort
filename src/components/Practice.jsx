import { CallContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Practice = () => {
  const {email, setEmail, name, setName}= CallContext()
  const navigate = useNavigate()

  const HandleSubmit=(e)=>{
    e.preventDefault()
    navigate("/services")
  }

  return (
    <div>
      <form>
        <label htmlFor="name" className='font-bold'>Name</label>
        <br />
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className='border-2 border-red-900 p-2 rounded-lg'/>
        <br />
        <label htmlFor="email" className='font-bold'>Email</label>
        <br />
        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className='border-2 border-red-900 p-2 rounded-lg'/>
        <button type='submit' onClick={HandleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Practice;
