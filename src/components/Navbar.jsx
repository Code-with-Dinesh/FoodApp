import React from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/Context';
const Navbar = () => {
  const cart = useContext(CartContext)
  console.log(cart.item)
  const navigate = useNavigate()
  function logoutHandler(){
    localStorage.removeItem('authToken')
    navigate("/login")
  }
  return (
    <div>

<nav className=" border-gray-200 bg-green-600 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
  <IoFastFoodSharp size={30} color="white" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GoFood</span>
  </Link>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  {
  !localStorage.getItem("authToken") ? (
    <div>
      <Link to="/login">
        <button
          type="button"
          className="text-black bg-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:text-white mr-3"
        >
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button
          type="button"
          className="text-black bg-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:text-white"
        >
          Sign up
        </button>
      </Link>
    </div>
  ) : 
   <div className='flex gap-9 items-center justify-center '>
    <Link to="/mycart"> <div className=' flex items-center justify-center flex-col  '>
      <span className='bg-red-600 rounded-full px-[8px] py-[1px] text-white'>{cart.item.length}</span>
     <FaCartShopping size={20} color='white' />
      <span className='text-white font-semibold'>My Cart</span>
     </div></Link>
     <div onClick={logoutHandler} className='bg-white px-3 py-1 rounded-lg cursor-pointer text-red-600 font-semibold'>Logout</div>
   </div>
}

      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
      <li>
        <Link to="/" className="block py-2 px-3 md:p-0 text-white text-lg  rounded hover:text-black " aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/about" className="block py-2 px-3 md:p-0 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black  dark:text-white   dark:border-gray-700">About</Link>
      </li>
      <li>
        <Link to="/service" className="block py-2 px-3 md:p-0 text-gray-900 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black  dark:text-white   dark:border-gray-700">Chefs</Link>
      </li>
      
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar