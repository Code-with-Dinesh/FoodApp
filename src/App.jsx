import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import About from './pages/About'
import Service from './pages/Service'
const App = () => {
  return (
    <BrowserRouter> 
    <div>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/service" element={ <Service/>}/>

      </Routes>
     
    </div>
    </BrowserRouter>
  )
}

export default App