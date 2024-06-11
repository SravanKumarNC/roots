import React from "react";

import TableData from "./TableData";

const Table = ({ headings, data }) => {
  // console.log(pageNumber)
  return (
    <div className="flex w-full ml-[4%] shadow-xl border border-t-0 mt-2 rounded-md max-h-[85vh] animate-fade-up">
      <table className="min-w-full">
        <thead>
          {headings?.map((heading) => (
            <th className="sticky bg-orange-400 transition duration-1000 dark:bg-tableHeader top-0 text-center font-medium dark:text-white  uppercase py-3 px-4 ">
              {heading}
            </th>
          ))}
        </thead>
        <tbody className="bg-white dark:bg-lightBg transition duration-1000 ">
          {data?.map((task, index) => (
            <TableData data={task} key={index} index={index}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
