import React from "react";
import Table from "../components/Table";

const Tasks = () => {
  const tasksHeadings = [
    "ID",
    "Tasks",
    "Bin Location",
    "Time Stamp",
    "Status",
    "Access",
  ];
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl p-4 text-orange-600">
          Tasks 
        </h1>
      </div>
      <div className="flex justify-center w-full ">
        <Table headings={tasksHeadings} />
      </div>
    </div>
  );
};

export default Tasks;
