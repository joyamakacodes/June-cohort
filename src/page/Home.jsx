
import Button from '../components/Button'
import reacticon from '../../src/assets/react.svg'
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import { useState } from 'react';

function Home() {
// const car= 'Toyota'
const [car, setCar] = useState('Toyota')
const phone = 'Samsung'
const handleclick= ()=>{
  alert('hello')
}
const handleclick2= ()=>{
 setCar('benz')
}

  return (
    <div>
     <Navbar/>
     <Cards/>
    {car}
   <p className='text-3xl font-bold text-green-900 my-10'> {phone}</p>
     <Button click={handleclick}>submit

     </Button>
     <p>{car}</p>
     <Button click= {handleclick2} image={reacticon}>save</Button>

    </div>
  )
}

export default Home
