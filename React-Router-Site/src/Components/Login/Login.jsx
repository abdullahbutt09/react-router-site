import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-72 h-100 mb-10 rounded-xl p-4 text-center font-bold text-2xl shadow-[0px_4px_10px_10px_rgba(0,0,0,0.3)] mt-10">
        <h2 className="mb-4">Login Here!</h2>
        <form className="flex flex-col gap-4 text-base font-normal">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-2 border-gray-400 rounded-xl shadow-[5px_5px_0px_2px_rgba(0,0,0,0.3)] outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border-2 border-gray-400 rounded-xl outline-none shadow-[5px_5px_0px_2px_rgba(0,0,0,0.3)]"
          />
          <Link className={`text-left underline`}>Forget Password?</Link>
          <Link className={`text-left underline`}>Forget Email?</Link>
        <div className="lg:flex-col">
        <button
         type="submit"
         className="w-60 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-xl hover:bg-orange-600 transition ease-in-out duration-300 cursor-pointer mb-3 text-lg"
         >
         Login 
        </button>
        <Link to="/signup">
  <button
    type="button"
    className="w-60 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-xl hover:bg-orange-600 transition ease-in-out duration-300 cursor-pointer text-lg"
  >
    SignUp
  </button>
</Link>
        </div>
        </form>
      </div>
    </div>
  );
}