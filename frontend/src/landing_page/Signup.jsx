import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/signup", { name, email, password })
      .then(result => {console.log(result)
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };
  return (
  <div className="min-h-screen flex justify-center items-center">
    <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">

      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Signup
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="name"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
          Signup
        </button>
      </form>

      {/* Login link */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?
      </p>
      <Link
        to="/login"
        className="block text-center text-blue-600 font-semibold text-sm hover:underline"
      >
        Login
      </Link>

    </div>
  </div>
);

}

export default Signup;
