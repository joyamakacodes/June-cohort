const Button = ({click, children })=>{
  
  return(
    <button className="bg-green-500 text-white hover:bg-white hover:text-green-600 outline-none hover:border-4 hover:border-green-900" onClick={click}>
      {children}
    
    </button>
  )
}

export default Button