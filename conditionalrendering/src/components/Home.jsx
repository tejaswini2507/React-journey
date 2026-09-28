import React from 'react'

const Home = () => {
  let age = 45

  let [isDark, setIsDark] = useState(true)

  let users = ["teju", "dharani", "tom", "jerry"]
  return (
    <div className={isDark ? "dark" : "light"}>

      <h1>this is home component</h1>
      {
        age >= 21 ? <h1>you can marry</h1> : <h1>you can not marry</h1>
      }
      <h2> {age >= 21 ? "you can marry" : "you can't marry"} </h2>

      <button onClick={() => setIsDark(!isDark)}> {isDark ? "light" : "dark"}</button>

      <ol>
        {
          users.length > 0 ?
            users.map((user, index) => {
              return <li key={index}> {user} </li>
            })
            : <h2> NO USER FOUND </h2>
        }
      </ol>
    </div>
  )
}

export default Home


