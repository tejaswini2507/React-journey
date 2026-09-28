import React, { useState } from 'react'

const Counter = () => {
  let [count, setCount] = useState(0)
  let [name, setName] = useState("virat")

  let increment = () => {
    setCount(count + 1)
  }

  let decrease = () => {
    setCount(count - 1)
  }

  let reset = () =>{
    setCount(0)
  }

  let changeName =() => {
    setName("rohit")
  }

  return (
    <>
    <h1> count is : {count}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrease}>decrease</button>
    <button onClick={reset}>reset</button>

    <h2> name : {Name}</h2>
    <button onClick={changeName}>changeName</button>

    <button onClick={()=>setCount(count + 1)}>increment 2</button>
    </>

  )
}

 export default Counter
