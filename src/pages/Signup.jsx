import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [signup, setSignup] = useState({ name: "", email: "", password: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/v1/create", {
        method: "POST",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signup),
       
      })
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        alert(`Error: ${errorText}`);
        return;
      }
  
      const json = await response.json();
      console.log("Server response:", json);
  
      if (!json.success) {
        console.log(json.message,"An error occurred");
      } else {
        console.log("User created successfully");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      console.log("There was an error processing your request. Please try again.");
    }
  };
  
  const changeHandler = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1692737349870-e3bfc704ebf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] object-cover'>
      <div className='flex-col justify-center items-center border-2 border-zinc-600 rounded-md p-7 w-[90%] sm:w-[40%]'>
        <h1 className='text-center text-white text-5xl mb-9 font-semibold'>Sign up</h1>
        <form onSubmit={submitHandler} className='w-full' method='POST'>
          <input
            type="text"
            value={signup.name}
            onChange={changeHandler}
            placeholder='Enter Your Name'
            name='name'
            required
            className='block px-3 py-3 mb-4 rounded-md w-full sm:w-[80%] mx-auto'
          />
          <input
            type="email"
            value={signup.email}
            onChange={changeHandler}
            placeholder='Enter Your Email'
            name='email'
            required
            className='block px-3 py-3 mb-4 rounded-md w-full sm:w-[80%] mx-auto'
          />
          <input
            type="password"
            value={signup.password}
            onChange={changeHandler}
            placeholder='Enter Your Password'
            name='password'
            required
            className='block px-3 py-3 mb-4 rounded-md w-full sm:w-[80%] mx-auto'
          />
          <input
            type="submit"
            value="Sign Up"
            className='block cursor-pointer bg-blue-600 px-3 py-2 w-full sm:w-[80%] mx-auto rounded-md text-white font-semibold'
          />
        </form>
        <Link to="/login">
          <button className='block cursor-pointer bg-red-600 px-3 py-2 rounded-md mt-2 text-white font-semibold w-full sm:w-[80%] mx-auto'>
            Already have an account?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
