import React from "react";
import logo from "../utils/Roots-logo.png";
import { Link } from "react-router-dom";
import { IoDocuments } from "react-icons/io5";
import { FaTasks, FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  return (
    <div
      className={`bg-gray-100 flex flex-col bg-slate-00 text-slate-900 dark:text-white min-h-screen transition duration-1000 top-0 left-0 w-[15%] `}
    >
      <div className="flex-1 p-2">
        <div className="">
          <Link to={"/dashboard"}>
            <div className="hover:cursor-pointer hover:text-slate-400 flex items-center justify-center">
              <img src={logo} alt="Logo" className={"w-[100%] h-20"} />
            </div>
          </Link>
        </div>

        <div className="my-6 xl:ml-3 mr-3 md:ml-2 sm:ml-1 font-semibold">
          <Link to={"/home"}>
            <div className="xl:flex text-black items-center hover:text-gray-400 hover:cursor-pointer dark:hover:bg-gray-300 hover:bg-slate-100 rounded">
              <FaHome className="h-7 w-7 m-3" />
              <span className="uppercase">Home</span>
            </div>
          </Link>
          <Link to={"/tasks"}>
            <div className="xl:flex text-black items-center hover:text-slate-400 hover:cursor-pointer dark:hover:bg-gray-300 hover:bg-slate-100 rounded">
              <FaTasks className="h-7 w-7  m-3 " />
              <h1 className="uppercase">Tasks</h1>
            </div>
          </Link>

          <Link to={"/records"}>
            <div className="xl:flex text-black items-center hover:text-slate-400 hover:cursor-pointer dark:hover:bg-gray-300 hover:bg-slate-100 rounded">
              <IoDocuments className="h-7 w-7 m-3 " />
              <h1 className="uppercase">Records</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="mb-3 flex items-center  justify-center">
        <Link to={"/"}>
          <button
            className={`flex mr-4 hover:bg-gray-300 items-center justify-center  font-bold text-red-600 py-2 px-5  w-40 rounded-md `}
          >
            <BiLogOut className="mr-3" />
            Logout
          </button>
        </Link>
        {/* <button
                    className="flex justify-center  items-center dark:text-white mb-4 text-black text-xl mt-4  m-1"
                    onClick={() => setTheme(!theme)}
                >
                    {theme === true ? (
                        <BsFillSunFill className="h-7 w-7 transition duration-1000" />
                    ) : (
                        <IoMdMoon className="h-6 w-6 transition duration-1000" />
                    )}
                </button> */}
      </div>
    </div>
  );
};

export default Navbar;
