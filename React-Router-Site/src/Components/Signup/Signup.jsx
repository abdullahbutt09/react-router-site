import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-72 md:w-120 h-150 md:h-105 mb-10 rounded-xl p-4 text-center font-bold text-2xl shadow-[0px_4px_10px_10px_rgba(0,0,0,0.3)] mt-5">
        <h2 className="mb-4">Sign-up Here!</h2>
        <form className="flex flex-col md:flex-row gap-4 text-base font-normal md:flex-wrap justify-center">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border-2 border-gray-400 rounded-xl shadow-[5px_5px_0px_2px_rgba(0,0,0,0.3)] outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-2 border-gray-400 rounded-xl shadow-[5px_5px_0px_2px_rgba(0,0,0,0.3)] outline-none"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="p-2 border-2 border-gray-400 rounded-xl shadow-[5px_5px_0px_2px_rgba(0,0,0,0.3)] outline-none"
          />
          <input
            type="number"
            placeholder="CNIC"
            className="p-2 border-2 border-gray-400 rounded-xl shadow-[5px_5px_0px_2px_rgba(0,0,0,0.3)] outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border-2 border-gray-400 rounded-xl outline-none shadow-[5px_5px_0px_2px_rgba(0,0,0,0.3)]"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 border-2 border-gray-400 rounded-xl outline-none shadow-[5px_5px_0px_2px_rgba(0,0,0,0.3)]"
          />
          <div className="flex gap-5 ">
          <Link className={`underline`}>Forget Password?</Link>
          <Link className={`underline`}>Forget Email?</Link>
          <Link className={`underline`}>Forget CNIC?</Link>
          </div>
        <div className="lg:flex-col">
        <Link to="/login">
        <button
         type="submit"
         className="w-60 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-xl hover:bg-orange-600 transition ease-in-out duration-300 cursor-pointer mb-3 text-lg"
         >
         Login 
         </button>
         </Link>
        <button
         type="submit"
         className="w-60 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-xl hover:bg-orange-600 transition ease-in-out duration-300 cursor-pointer text-lg"
         >
         SignUp 
         </button>
        </div>
        </form>
      </div>
    </div>
  );
}