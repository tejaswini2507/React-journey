import React from 'react'

const Home = () => {
  let handleClick=()=>{
    alert("you are getting a call")
  }

  let add = (a,b) => {
    alert(a+b)
  }

  let userDetails = (name,age) => {
    alert(`my name is ${name} and my age is ${age}`)
  }

  let hi =(e) =>{
    console.log(e)
  }

  return (
    <div className='homeContainer'>
      <header>
        <button onClick={handleClick}>call me</button>
        <button onClick={()=>add(30,60)}>add</button>
        <button onClick={userDetails("miller",45)}>details</button>
        <button onClick={hi}>dbl click me</button>
      </header>
    </div>
  )

}

export default Home
