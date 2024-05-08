import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="container flex h-screen">
      <Navbar />
      <div className="flex-1 overflow-y-auto">{<Outlet />}</div>
    </div>
  );
};

export default Layout;
