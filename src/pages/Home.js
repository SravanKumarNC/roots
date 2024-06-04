import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../components/Btn";
import { toast } from "react-toastify";

const Home = () => {
  const [task, setTask] = useState("");
  const navigate = useNavigate();
  const handlePick = () => {
    setTask("Pick");
    toast.success("Task: Picking");
  };
  const handleDrop = () => {
    setTask("Drop");
    console.log(task);
    toast.success("Task: Put away");
  };
  const handleClick = () => {
    if (task) {
      navigate(`/qr/${task}`);
    }else{
      toast.warn("select task",{
        className: "toast-message"
      })
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex space-x-4 p-4">
        <div onClick={handlePick}>
          <Btn
            name={"Picking"}
            color={"bg-green-500"}
            hcolor={"bg-green-400"}
          />
        </div>
        <div onClick={handleDrop}>
          <Btn
            name={"Put away"}
            color={"bg-green-500"}
            hcolor={"bg-green-400"}
          />
        </div>
      </div>
      <div onClick={handleClick}>
        <Btn
          name={"Scan QR"}
          color={"bg-orange-400"}
          hcolor={"bg-orange-300"}
        />
      </div>
    </div>
  );
};

export default Home;
