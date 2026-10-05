

import React from 'react'
import Navbar from './Component/Navbar'
import Heros from './Component/Heros'
import TopInfoBar from './Component/topbar'
import About from './Component/About'


const App = () => {
  return (
    <>
    <div className='site-top'>
       <TopInfoBar/>
      <Navbar/>
       </div>
      <Heros/>
      <About/>
     
     
     
    
     

      
    </>
  )
}

export default App
