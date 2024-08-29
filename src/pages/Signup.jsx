import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  const [signup,setsignup] = useState({name:"",email:"",password:""})

  const submitHandler =async (e)=>{
   // let data = await fetch("http://localhost:5000/api/v1/create",signup)
    e.preventDefault();
    setsignup({name:"",email:"",password:""})
    console.log(signup)
  }

  function changeHandler(e){
        setsignup({...signup,[e.target.name]:e.target.value})    
  }
 
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[url(https://plus.unsplash.com/premium_photo-1695558759869-b1a47e3f09d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] object-cover'>
        <div className='flex-col bg-neutral-400  justify-center items-center border-2 rounded-md p-7 w-[40%]'>
            <h1 className='text-center  text-white text-3xl mb-5 font-semibold'>Sign up</h1>
            <form action="" onSubmit={submitHandler}>
                <input type="text" value={signup.name} onChange={changeHandler} placeholder='Enter Your Name' name='name' required className='ml-[23%] px-3 py-2 mb-4 rounded-md w-[20vw]' />
                <input type="email" value={signup.email} onChange={changeHandler} placeholder='Enter Your Email' name='email' required className='ml-[23%]  px-3 py-2 mb-4 rounded-md w-[20vw]' />
                <input type="password" value={signup.password} onChange={changeHandler} placeholder='Enter Your password' name='password' required className='ml-[23%] block px-3 py-2 mb-4 rounded-md w-[20vw]' />
                <input className='ml-[23%] bg-blue-600 px-3 py-2 w-[20vw] rounded-md text-white font-semibold' type="submit" />
            </form>
         <Link to="/login">  <button className='bg-red-600 px-3 py-2 rounded-md mt-2 text-white font-semibold w-[20vw] ml-[23%]'>Alredy Account</button></Link> 
            
        </div>
    </div>
  )
}

export default Signup