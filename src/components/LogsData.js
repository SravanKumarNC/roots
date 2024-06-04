import React from "react";

const LogsData = ({ data, index }) => {
  console.log(data);
  return (
    <tr className="dark:hover:bg-tablehover hover:bg-gray-100">
      <td className="text-center  py-3 whitespace-nowrap">
        <div className="text-sm dark:text-gray-400 font-semibold">
          {index + 1}
        </div>
      </td>
      <td className="text-center  py-3 whitespace-nowrap">
        <div className="text-sm dark:text-gray-400 font-semibold uppercase">
          {data.message}
        </div>
      </td>
      <td className="text-center  py-3 whitespace-nowrap">
        <div className="text-sm dark:text-gray-400 font-semibold uppercase">
          {data.Timestamp}
        </div>
      </td>
    </tr>
  );
};

export default LogsData;
