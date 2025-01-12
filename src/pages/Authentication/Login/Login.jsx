import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Login | YourApp";
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center overflow-auto"
      style={{ backgroundImage: "url('https://i.ibb.co.com/NjVGTZ0/18773518-6031991.jpg')" }}>

      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto px-4 md:px-0 z-10 relative min-h-screen">
        
        {/* Text content */}
        <div className="text-left text-white space-y-4 px-4 md:px-6 relative z-10 mb-8 md:mb-0">
          <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-white"><span className="text-green-500">Your</span><span className="text-red-500">App</span></h1>
          <p className="text-sm md:text-xl font-bold text-green-400"> Race towards success, together we run.</p>
          <p className="text-xs md:text-base text-white text-justify">
            <span className="text-xl text-red-500 font-bold">"</span>YourApp is a modern platform that connects users with a seamless experience."
            <span className="text-xl text-red-500 font-bold"></span>
          </p>
        </div>

        {/* Form content */}
        <div className="w-full relative border-y-8 border-[#228B22] max-w-md p-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl shadow-lg z-10 mb-10">
          <h2 className="text-3xl font-bold text-center text-white mb-2"> Welcome Back</h2>
          <p className="text-white text-center text-xs md:text-sm">Glad to see you again</p>
          <p className="text-white mb-4 text-center text-xs md:text-sm">Log in to your account below</p>
          
          <form className="space-y-4">
            {/* Email input */}
            <div className="relative flex items-center mt-4">
              <input
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password input */}
            <div className="relative flex items-center mt-4">
              <span className="absolute top-4 right-4" onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaEye className="text-gray-700" /> : <FaEyeSlash className="text-gray-700" />}
              </span>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-gradient-to-r from-[#1B1B1D] via-[#272730] to-[#6E2B4E] hover:from-[#1B1B1D] hover:via-[#114811] transition duration-300 hover:to-[#228B22] ease-in-out btn border-none rounded-md"
            >
              Login
            </button>
          </form>

          {/* Google login */}
          <div className="flex items-center justify-center px-1 mt-2 pb-3">
            <div className="flex-grow border-t border-gray-400"></div>
            <div className="mx-4 text-gray-500">Or</div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <button
            type="button"
            className="w-full px-4 py-2 font-semibold text-white bg-gradient-to-r from-[#0334c8] via-[#023d84] to-[#07881c] hover:from-[#4d8823] hover:via-[#113e48] transition duration-300 hover:to-[#228B22] ease-in-out btn border-none rounded-md"
          >
            <FcGoogle className="text-2xl" /> Login with Google
          </button>

          <p className="text-sm text-center text-white mt-1">
            New Here?{" "}
            <Link to='/register' className="font-medium text-white hover:underline">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
