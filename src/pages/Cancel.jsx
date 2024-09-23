import React from 'react'
import Navbar from '../components/Navbar'
import { FaAmazonPay } from "react-icons/fa";
import Footer from './Footer';
const Cancel = () => {
  return (
    <>
        <Navbar/>
   
    <div className='flex items-center justify-center h-[74vh]'>
        <div  className=' flex items-center justify-center flex-col'>
        <FaAmazonPay size={80} />
        <p className='text-3xl font-semibold text-red-600 mt-[-4%]'>Your payment is Cancel</p>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cancel