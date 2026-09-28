import React from 'react'

const Navbar = () => {
  let [isLoggedin, setIsLoggedin] = useState(true);
  return (
    <nav>
      <h1>conditionalrendering</h1>
      <button onClick={()=>setIsLoggedin(!isLOggedin)}>
          {isLoggedin ? "logout" : "login"} 
      </button>
      
    </nav>
  )
}

export default Navbar
