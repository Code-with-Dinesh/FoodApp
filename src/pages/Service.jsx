import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'

const Service = () => {
  return (
    <div className='w-full bg-zinc-900 text-white'>
      <Navbar/>
      <h1 className='text-center text-2xl md:text-5xl mt-14 font-semibold'>OUR SPECIAL CHEF's</h1>
      <p className='text-center md:w-[30%] w-full text-zinc-200 mt-4 p-2 leading-tight text-md md:text-lg mx-auto'>
        Featured below are some of our special chefs who work to prepare your meal
      </p>
      
      {/* Chef Grid */}
      <div className='w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center'>
        
        {/* Chef Card 1 */}
        <div className='w-auto rounded-lg overflow-hidden hover:scale-105 transition ease-in-out duration-200 flex flex-col items-center'>
          <img className='h-[50vh] object-cover rounded-lg' src="https://i.pinimg.com/564x/66/14/a3/6614a3ff3824042328a2ef5a65b489de.jpg" alt="" />
          <h1 className='text-zinc-300 mt-3 text-lg'>Khushi Garg</h1>
        </div>
        
        {/* Chef Card 2 */}
        <div className='w-auto rounded-lg overflow-hidden hover:scale-105 transition ease-in-out duration-200 flex flex-col items-center'>
          <img className='h-[50vh] object-cover rounded-lg' src="https://i.pinimg.com/564x/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.jpg" alt="" />
          <h1 className='text-zinc-300 mt-3 text-lg'>Navneet Sharma</h1>
        </div>

        {/* Chef Card 3 */}
        <div className='w-auto rounded-lg overflow-hidden hover:scale-105 transition ease-in-out duration-200 flex flex-col items-center'>
          <img className='h-[50vh] object-cover rounded-lg' src="https://i.pinimg.com/736x/4c/ef/61/4cef61cdba20ee5d0312d407a3ff0d07.jpg" alt="" />
          <h1 className='text-zinc-300 mt-3 text-lg'>Sahil Jalandhara</h1>
        </div>
        
        {/* Chef Card 4 */}
        <div className='w-auto rounded-lg overflow-hidden hover:scale-105 transition ease-in-out duration-200 flex flex-col items-center'>
          <img className='h-[50vh] object-cover rounded-lg' src="https://i.pinimg.com/564x/c0/d2/0c/c0d20c92d010ba81f9582698ed1a460e.jpg" alt="" />
          <h1 className='text-zinc-300 mt-3 text-lg'>Ritu Yadav</h1>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Service
