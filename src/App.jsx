import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import About from './pages/About'
import Service from './pages/Service'
import Signup from './pages/Signup'
import Mycart from './components/Mycart'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
const App = () => {
  return (
    <BrowserRouter> 
    <div>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/service" element={ <Service/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/mycart' element={<Mycart/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/cancel' element={<Cancel/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App