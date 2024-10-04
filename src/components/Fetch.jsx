import { useState, useEffect } from "react";

const FetchPractice = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

const payload= {
  name: name,
  email: email,
  body: phone,
}
  
  useEffect(() => {
      fetch("c")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err));
    }, []);

const handleSubmit = (e)=>{
  e.preventDefault()
  const URL= "https://jsonplaceholder.typicode.com/comments"
fetch(URL, 
  {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(payload)
  }
)

}
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Address</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Company</td>
            <td>Website</td>
          </tr>
        </thead>
        <tbody>
          {users.map(({id, name, email,address, phone, website, company})=>(
            <tr key={id}>
              <td>{name}</td>
              <td>{address.street}, {address.city} , {address.geo.lat}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{company.name}</td>
              <td>{website}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-4 items-center">
          <div>
          <label htmlFor="name">Name</label>
        <br />
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="border-2 border-red-900" />
        
          </div>
          <div>
          <label htmlFor="email">Email</label>
          <br />
        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="border-2 border-red-900"/>
       
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <div>
            
        <label htmlFor="phone">Phone</label>
        <br />
        <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} className="border-2 border-red-900"/>
          </div>
     
        </div>
        <div className="flex justify-center">
        <button type="submit" className="border-2 text-white border-white bg-red-900 ">Submit</button>
        </div>
         
      </form>
    </div>
  );
}

export default FetchPractice;
