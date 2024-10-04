/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from "react";

const GlobalContext= createContext()


export const StateManager= ({children}) => {
  const [email, setEmail] = useState('');
  const [name, setName]= useState('')
  return (
    <GlobalContext.Provider value={{
      email, setEmail,
      name, setName
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const CallContext =()=> useContext(GlobalContext)


