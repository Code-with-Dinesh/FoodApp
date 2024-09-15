import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [islogin,setislogin] = useState({email:"",password:""})
  const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/v1/loginuser", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: islogin.email, password: islogin.password }),
      });
  
      if (!response.ok) {
        // If the response status code is not in the range 200-299
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
  
      if (!json.success) {
        alert("Something went wrong during login.");
      } else {
        // Successful login, store the token and navigate to the dashboard
        if (json.message.token) {
          localStorage.setItem('authToken', json.message.token);  // Store the JWT token in localStorage
        }
        navigate("/");  // Navigate to the homepage or dashboard after login
      }
    } catch (error) {
      console.error("Error in login API call:", error);
      alert("Login failed. Please check your network or try again later.");
    }
  };
  
  const changeHandler = (e) => {
    setislogin({ ...islogin, [e.target.name]: e.target.value });
  };
  
  return (
    <div className=' w-screen h-screen flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center '>
        <div className='flex-col border-[1px] border-zinc-600  justify-center items-center   p-7 w-[40%] bg-[rgba(4,8,38,0.15)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg rounded-lg'>
            <h1 className='text-center  text-zinc-300 text-5xl mb-9 font-semibold'>Login </h1>
            <form action="" onSubmit={submitHandler}>
                <input onChange={changeHandler} type="email" value={islogin.email} placeholder='Enter Your Email' name='email' required className='ml-[23%]  px-3 py-3 mb-4 rounded-md w-[20vw]' />
                <input onChange={changeHandler} type="password" value={islogin.password}  placeholder='Enter Your password' name='password' required className='ml-[23%] block px-3 py-3 mb-4 rounded-md w-[20vw]' />
                <input  className='ml-[23%] cursor-pointer bg-blue-600 px-3 py-2 w-[20vw] rounded-md text-white font-semibold' type="submit" />
            </form>
         <Link to="/signup">  <button className='bg-red-600 px-3 py-2 rounded-md mt-2 text-white font-semibold w-[20vw] ml-[23%]'>Signup</button></Link> 
        </div>
    </div>
  )
}

export default Login