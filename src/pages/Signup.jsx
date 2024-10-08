import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [signup, setSignup] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate()
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
        if (json.token) {
          localStorage.setItem('authToken', json.token);
        }
        navigate("/login")
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
    <div className="w-screen h-screen flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center">
    <div className="flex flex-col justify-center items-center border-[1px] border-zinc-600 p-7 w-[90%] sm:w-[50%] lg:w-[30%] bg-[rgba(4,8,38,0.15)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg rounded-lg">
      <h1 className="text-center text-white text-5xl mb-9 font-semibold">Sign up</h1>
      <form onSubmit={submitHandler} className="w-full" method="POST">
        <input
          type="text"
          value={signup.name}
          onChange={changeHandler}
          placeholder="Enter Your Name"
          name="name"
          required
          className="block px-3 py-3 mb-4 rounded-md w-full sm:w-[80%] lg:w-[70%] mx-auto"
        />
        <input
          type="email"
          value={signup.email}
          onChange={changeHandler}
          placeholder="Enter Your Email"
          name="email"
          required
          className="block px-3 py-3 mb-4 rounded-md w-full sm:w-[80%] lg:w-[70%] mx-auto"
        />
        <input
          type="password"
          value={signup.password}
          onChange={changeHandler}
          placeholder="Enter Your Password"
          name="password"
          required
          className="block px-3 py-3 mb-4 rounded-md w-full sm:w-[80%] lg:w-[70%] mx-auto"
        />
        <input
          type="submit"
          value="Sign Up"
          className="block cursor-pointer bg-blue-600 px-3 py-2 w-full sm:w-[80%] lg:w-[70%] mx-auto rounded-md text-white font-semibold"
        />
      </form>
      <Link to="/login">
        <button className="block cursor-pointer bg-red-600 px-3 py-2 rounded-md mt-2 text-white font-semibold w-full sm:w-[80%] lg:w-[100%] mx-auto">
          Already have an account?
        </button>
      </Link>
    </div>
  </div>
  
  );
};

export default Signup;
