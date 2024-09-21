import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [islogin, setislogin] = useState({ email: "", password: "" });

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
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        toast.error("Login failed. Please check your credentials.");
      } else {
        if (json.message.token) {
          localStorage.setItem('authToken', json.message.token);  // Store the JWT token
        }
        navigate("/");  // Navigate after successful login
      }
    } catch (error) {
      console.error("Error in login API call:", error);
      toast.error("Login failed. Please try again.",error);
    }
  };

  const changeHandler = (e) => {
    setislogin({ ...islogin, [e.target.name]: e.target.value });
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center '>
      <ToastContainer />
      <div className='flex-col border-[1px] border-zinc-600 justify-center items-center p-7 w-[40%] bg-[rgba(4,8,38,0.15)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg rounded-lg'>
        <h1 className='text-center text-zinc-300 text-5xl mb-9 font-semibold'>Login</h1>
        <form onSubmit={submitHandler}>
          <input onChange={changeHandler} type="email" value={islogin.email} placeholder='Enter Your Email' name='email' required className='ml-[23%] px-3 py-3 mb-4 rounded-md w-[20vw]' />
          <input onChange={changeHandler} type="password" value={islogin.password} placeholder='Enter Your password' name='password' required className='ml-[23%] block px-3 py-3 mb-4 rounded-md w-[20vw]' />
          <input className='ml-[23%] cursor-pointer bg-blue-600 px-3 py-2 w-[20vw] rounded-md text-white font-semibold' type="submit" />
        </form>
        <Link to="/signup"><button className='bg-red-600 px-3 py-2 rounded-md mt-2 text-white font-semibold w-[20vw] ml-[23%]'>Signup</button></Link>
      </div>
    </div>
  );
}

export default Login;
