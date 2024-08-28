import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Advertise from '../components/Advertise'
import Card from '../components/Card'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Search/>
        <Advertise/>
        <div className='flex flex-wrap gap-4 items-center justify-center mt-5'>
        <Card/>
        <Card/>
        <Card/>
        
        </div>
    </div>
  )
}

export default Home