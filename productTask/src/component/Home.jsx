import React from 'react'

import products from '../data.json'

const Home = () => {
  return (
    <>
    
    <nav>
      <h1>ProductTask</h1>
    </nav>

    <main>
      {
        products.map((product) => {
          return <Card
                     title={product.title}
                     price={product.price}
                     rating={product.rating.rate}
                     link={product.image}
                  />
        })
      }
    </main>
      
      </>
  )
}
export default Home