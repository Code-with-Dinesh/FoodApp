import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import { MdDelete } from "react-icons/md";
import { BsCartXFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "../pages/Footer";
import toast, { Toaster } from 'react-hot-toast';

import {loadStripe} from '@stripe/stripe-js';
const Mycart = () => {
   const [order,setorder] = useState(true)
    const navigate =  useNavigate()
    let cart = useContext(CartContext)
    console.log(cart.item)
    // calculate the total price
    let totalPrice = cart.item
    .map(item => item.qty * item.price)  
    .reduce((a, b) => a + b, 0);    
    // remove Item funcanlity
    const removeHandler = (e)=>{
       let update = cart.item.filter((element)=>element.id !==e.id)
       cart.setitem(update);
    }    
  // order status
  const orderstatus = async()=>{
    const stripe = await loadStripe("pk_test_51Q22fKHrevWmd8IWjqDSWXWxwQE4db9MohgYAVHqqIUkin3v022ldDqcYCaQZVdpZ00mo0mVUDOpVxhfsoXhZIt500JW0EdBUP")
    const body = {
      products:cart.item
    }
    const response = await fetch("http://localhost:5000/api/v1/checkout",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(body)
    })
    const session = await response.json()
    const result = stripe.redirectToCheckout({
      sessionId:session.id
    })
    if(result.error){
      console.log("Error while Checkout",error)
    }
   
    setorder(false)
  }
  return (
  <>

    <div className="bg-zinc-900 h-[86vh] w-full relative">
      <Navbar/>
  
    {/* Go Back Button */}
    <div
      onClick={() => navigate(-1)}
      className="text-green-600 cursor-pointer text-xl flex items-center justify-start gap-5 font-semibold ml-7 mt-3"
    >
      <FaArrowLeftLong /> Go Back
    </div>
  
    {/* Table for larger screens */}
    <div className="mt-16">
      <table className="table-auto w-full hidden md:table">
        <Toaster />
        <thead className="">
          {cart.item.length > 0 ? (
            <tr className="text-green-600 border-b border-gray-600">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 text-left">Quantity</th>
              <th className="py-2 text-left">Amount</th>
              <th className="py-2 text-left"></th>
            </tr>
          ) : (
            <div className="flex items-center justify-center mt-[5%]  flex-col text-green-600 text-4xl font-semibold">
              Cart is Empty <BsCartXFill className="mt-4" size={80} color="white" />
            </div>
          )}
        </thead>
        <tbody>
          {cart.item.map((element, index) => {
            return (
              <tr key={index} className="text-white border-b border-gray-600">
                <td className="py-2 px-4">{element.name}</td>
                <td className="py-2">{element.qty}</td>
                <td className="py-2">₹{element.price}</td>
                <td
                  onClick={() => {
                    removeHandler(element);
                    toast.failure("Removed item");
                  }}
                  className="py-2 cursor-pointer"
                >
                  <MdDelete />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  
    {/* Responsive Cart Items for smaller screens */}
    <div className="flex flex-col space-y-4 md:hidden p-4">
      {cart.item.length > 0 ? (
        cart.item.map((element, index) => (
          <div key={index} className="bg-zinc-800 p-4 rounded-lg flex justify-between items-center">
            <div className="flex flex-col space-y-1">
              <span className="text-white font-semibold">{element.name}</span>
              <span className="text-white">Quantity: {element.qty}</span>
              <span className="text-white">₹{element.price}</span>
            </div>
            <div
              onClick={() => {
                removeHandler(element);
                toast.failure("Removed item");
              }}
              className="text-red-500 cursor-pointer"
            >
              <MdDelete size={24} />
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center text-green-600 text-2xl font-semibold">
          Cart is Empty <BsCartXFill className="mt-4" size={80} color="white" />
        </div>
      )}
    </div>
  
    {/* Total Price and Checkout button */}
    {cart.item.length > 0 && (
      <div className="text-white ml-4 md:ml-24 mt-10 mb-2 font-semibold text-xl">
        <p>Your Total Price is ₹{totalPrice}</p>
        {order && (
          <button
            className="bg-green-600 text-white px-3 py-2 rounded-lg mt-4"
            onClick={orderstatus}
          >
            Checkout
          </button>
        )}
      </div>
    )}
   
  </div>
  <Footer/>
  </>
  );
};

export default Mycart;
