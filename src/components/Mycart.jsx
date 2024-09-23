import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import { MdDelete } from "react-icons/md";
import { BsCartXFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    toast.success("Your order is Confirm successfully")
    setorder(false)
  }
  return (

    <div className="bg-zinc-900 h-screen w-screen relative ">
        <ToastContainer />
        <div  onClick={()=>navigate(-1)} className="text-green-600   cursor-pointer text-xl flex items-center justify-center gap-5 font-semibold ml-7 absolute top-3 "><FaArrowLeftLong /> Go Back</div>
    <table className=" table-auto   w-full absolute top-20">
      <thead className="">
        {
            cart.item.length>0 ?<tr className="text-green-600 p border-b border-gray-600">
           
            <th className="py-2 px-24 text-left ">Name</th>
            <th className="py-2  text-left">Quantity</th>
            <th className="py-2 text-left">Amount</th>
          </tr>:<div className="flex items-center justify-center mt-[20%] flex-col text-green-600 text-4xl font-semibold">Cart is Empty<BsCartXFill className="mt-4" size={80} color="white" />
          </div>
        }
        
      </thead>
      <tbody>
        {
            cart.item.map((element,index)=>{
                return(
                    <>
                    <tr key={index} className="text-white border-b border-gray-600">
        
          <td className="py-2 px-24">{element.name}</td>
          <td className="py-2">{element.qty}</td>
          <td className="py-2">₹{element.price}</td>
          <td onClick={()=>removeHandler(element)} className="py-2 cursor-pointer "><MdDelete /></td>
        </tr>
        
                    </>
                )
            })
        }
        {
            cart.item.length>0?<div>
                <p className="text-white ml-24 mt-10 mb-2 font-semibold text-xl">Your Total Price is ₹{totalPrice}</p>
               {
                order && <button className="bg-green-600 text-white px-3 py-2 rounded-lg  ml-24" onClick={orderstatus}>Checkout</button>
               } 
            </div>:""
        }
      </tbody>
    </table>
  </div>
  
  
  );
};

export default Mycart;
