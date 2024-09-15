import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'
const About = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full  bg-zinc-900  flex flex-col items-center text-white '>
      <div className=' w-[100%] p-10 h-screen flex flex-wrap gap-x-7   items-center'>
        <div className='w-[45%] h-[40%]  p-5 '>
         <h1 className='text-green-500  text-4xl font-semibold'>Pickup or delivery from restaurants near you</h1>
         <p className='mt-2'>Go Food delivers exceptional dining with fresh, high-quality ingredients. Our diverse menu offers quick bites and hearty meals, crafted to satisfy every taste. Experience fast, flavorful, and satisfying food with every visit, whether you dine in or take out."</p>
        </div>
        <div className='w-[45%] h-[50%] hover:scale-105 transition ease-in-out duration-200  overflow-hidden '>
          <img className='h-full  p-2 rounded-xl overflow-hidden w-full object-cover' src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='w-[45%] h-[50%]  overflow-hidden hover:scale-105 transition ease-in-out duration-200 '>
            <img className='h-full p-2 rounded-xl overflow-hidden w-full object-cover' src="https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='w-[50%] p-5 h-[40%]  '>
        <h1 className='text-green-500 p-2 text-4xl font-semibold'>
        Go Food: Delicious, Fast, and Fresh Restaurant Dining</h1>
        <p className=' p-2'>Go Food offers a delightful dining experience, combining fast service with fresh, high-quality ingredients. Whether you're craving a quick bite or a full meal, our diverse menu caters to all tastes, ensuring satisfaction with every visit."</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About