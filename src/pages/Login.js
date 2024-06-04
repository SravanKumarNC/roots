import React from "react";
import { FcGoogle } from "react-icons/fc";
import logo from "../utils/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className="h-screen flex justify-center items-center bg-orange-50">
      <div className="bg-white w-[30%] h-[75%] rounded-3xl shadow-2xl space-y-6">
        <div className="h-full flex justify-center items-center">
          <div className="w-[70%] space-y-2">
            <div></div>
            <div className="flex justify-center -mt-20">
              <img src={logo} alt="logo" className="w-[80%]"></img>
            </div>

            {/* <h1 className="font-bold text-3xl text-blue-600">Login</h1> */}
            <div className="space-y-2">
              <h1 className="text-blue-700">Email</h1>
              <input
                type="text"
                placeholder="username@gmail.com"
                className="bg-gray-200 rounded-md p-2 px-4 w-[100%]"
              ></input>
              <h1 className="text-blue-700">Password</h1>
              <input
                type="text"
                placeholder="Password"
                className="bg-gray-200 rounded-md p-2 px-4 w-[100%]"
              ></input>
              <h1 className="text-blue-700">Forgot Password ?</h1>
            </div>
            <div>
              <button
                className="w-[100%] bg-orange-400 p-2 px-4 rounded-md font-semibold hover:bg-orange-500"
                onClick={handleClick}
              >
                Login
              </button>
            </div>
            <div className="flex justify-center">
              <div className="space-y-2">
                <h3 className="text-blue-700">or continue with</h3>
                <FcGoogle className="w-28 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
