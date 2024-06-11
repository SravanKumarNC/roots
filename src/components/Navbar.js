import React from "react";
import logo from "../utils/logo.png";
import rootsLogo from "../utils/Roots-logo.png";
import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { LuScanLine } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";
import { VscDebugConsole } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";

const Navbar = () => {
  return (
    <div
      className={`bg-gray-100 flex flex-col bg-slate-00 text-slate-900 dark:text-white min-h-screen transition duration-1000 top-0 left-0 w-[20%] `}
    >
      <div className="flex-1 p-2">
        <div className="border-b-2">
          <Link to={""}>
            <div className="hover:cursor-pointer px-4 hover:text-slate-400 flex items-center justify-center">
              <img src={logo} alt="Logo" className={"w-[100%] h-22"} />
            </div>
          </Link>
        </div>

        <div className=" my-6 mr-3 font-semibold">
          <Link to={"/dashboard"}>
            <div className="xl:flex text-black items-center  hover:cursor-pointer dark:hover:bg-gray-300 hover:border-2 hover border-blue-400 rounded-md">
              <MdOutlineDashboard className="h-7 w-7 m-3" />
              <span className="uppercase">Dashboard</span>
            </div>
          </Link>
          <Link to={"/scan"}>
            <div className="xl:flex text-black items-center  hover:cursor-pointer dark:hover:bg-gray-300 hover:border-2 hover border-blue-400 rounded-md">
              <LuScanLine className="h-7 w-7 m-3" />
              <span className="uppercase">Scan for Task</span>
            </div>
          </Link>
          <Link to={"/tasks"}>
            <div className="xl:flex text-black items-center  hover:cursor-pointer dark:hover:bg-gray-300 hover:border-2 hover border-blue-400 rounded-md">
              <FaTasks className="h-7 w-7  m-3 " />
              <h1 className="uppercase">History</h1>
            </div>
          </Link>
          <Link to={"/logs"}>
            <div className="xl:flex text-black items-center  hover:cursor-pointer dark:hover:bg-gray-300 hover:border-2 hover border-blue-400 rounded-md">
              <VscDebugConsole className="h-7 w-7 m-3 font-bold" />
              <h1 className="uppercase">System logs</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="mb-3 flex items-center px-4  justify-between">
        <div>
          <img src={rootsLogo} alt="Logo" className={"w-[100%] h-20"} />
        </div>
        <Link to={"/"}>
          <button
            className={`hover:bg-gray-300  text-red-600 rounded-md `}
          >
            <BiLogOut className="h-7 w-7  m-3 " />
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
