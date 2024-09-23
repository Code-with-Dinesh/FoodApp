import React from 'react'
import Navbar from '../components/Navbar'
import { FaAmazonPay } from "react-icons/fa";
import Footer from './Footer';
const Success = () => {
  return (
    <>
        <Navbar/>
   
    <div className='flex items-center justify-center h-[74vh]'>
        <div  className=' flex items-center justify-center flex-col'>
        <FaAmazonPay size={80} />
        <p className='text-3xl font-semibold text-green-600 mt-[-4%]'>Your payment is success</p>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Success