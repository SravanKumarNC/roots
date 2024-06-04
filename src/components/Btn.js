import React from "react";

const Btn = ({name, color, hcolor}) => {
  return (
    <button className={`${color} px-12 py-3 rounded-md cursor-pointer hover:${hcolor} font-bold`}>
      {name}
    </button>
  );
};

export default Btn;
