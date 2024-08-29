import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[url(https://plus.unsplash.com/premium_photo-1699467557048-cedcb4ea82d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] object-cover'>
        <div className='flex-col border-2 border-zinc-600  justify-center items-center  rounded-md p-7 w-[40%]'>
            <h1 className='text-center  text-zinc-300 text-5xl mb-9 font-semibold'>Login </h1>
            <form action="">
                <input type="email"  placeholder='Enter Your Email' name='email' required className='ml-[23%]  px-3 py-3 mb-4 rounded-md w-[20vw]' />
                <input type="password"  placeholder='Enter Your password' name='password' required className='ml-[23%] block px-3 py-3 mb-4 rounded-md w-[20vw]' />
                <input className='ml-[23%] bg-blue-600 px-3 py-2 w-[20vw] rounded-md text-white font-semibold' type="submit" />
            </form>
         <Link to="/signup">  <button className='bg-red-600 px-3 py-2 rounded-md mt-2 text-white font-semibold w-[20vw] ml-[23%]'>Signup</button></Link> 
        </div>
    </div>
  )
}

export default Login