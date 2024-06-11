import React from "react";

const TableData = ({ data, index }) => {
  
  return (
    <tr className="dark:hover:bg-tablehover hover:bg-gray-100">
      <td className="text-center  py-4 whitespace-nowrap">
        <div className="text-sm dark:text-gray-400 font-semibold">
          {index + 1}
        </div>
      </td>
      <td className="text-center  py-4 whitespace-nowrap">
        <div className="text-sm dark:text-gray-400 font-semibold uppercase">
          {data.tasks}
        </div>
      </td>
      <td className="text-center  py-4 whitespace-nowrap">
        <div className="text-sm dark:text-gray-400 font-semibold uppercase">
          {data.binLocation}
        </div>
      </td>
      <td className="text-center  py-4 whitespace-nowrap">
        <div className="text-sm dark:text-gray-400 font-semibold uppercase">
          {data.createdAt}
        </div>
      </td>
      <td className ="text-center  py-4 whitespace-nowrap">
        <div className="text-sm dark:text-gray-400 font-semibold uppercase">
          Completed
        </div>
      </td>
    </tr>
  );
};

export default TableData;
 