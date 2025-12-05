import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const navigate = useNavigate()

   const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3002/login',{email,password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        navigate("/dashboard");
      }
    })
    .catch(err => console.log(err))
   }
  return (
  <div className="min-h-screen flex justify-center items-center">
    <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">

      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Login
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            name="password"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all"
        >
          Login
        </button>
      </form>

      {/* Signup link */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Don't have an account?
      </p>
      <Link
        to="/Signup"
        className="block text-center text-blue-600 font-semibold text-sm hover:underline"
      >
        Signup
      </Link>
    </div>
  </div>
);

}

export default Login