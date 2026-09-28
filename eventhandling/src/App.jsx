import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowseRouter>
    <nav>
      <h2>eventhandling</h2>
      <ul>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
      </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      </BrowseRouter>
    
    
    </>
  )
}
export default App