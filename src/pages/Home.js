import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/qr");
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-green-500 px-12 py-3 rounded-md" onClick={handleClick}>
        Scan QR
      </div>
    </div>
  );
};

export default Home;
