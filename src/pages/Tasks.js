import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import TasksService from "../services/TasksService";
// import TasksService from "../services/TasksService";

const Tasks = () => {
  // const [data, setData] = useState([]);
  const [limitedTasks, setLimitedTasks] = useState([]);
  const [Pages, setPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TasksService.getPaginatedData(pageNumber);
        setLimitedTasks(response.data.tasks);
        setPages(response.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [pageNumber]);

  const handleNextPage = () => {
    if (pageNumber < Pages) {
      setPageNumber(pageNumber + 1);
    }
  };
  const handlePreviousPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };
  console.log(pageNumber);
  console.log(limitedTasks);
  console.log(Pages);
  const tasksHeadings = ["ID", "Tasks", "Bin Location", "Time Stamp", "Status"];
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl py-4 ml-[4%] text-orange-600">
          Tasks
        </h1>
      </div>
      <div className="flex justify-center w-full ">
        <Table headings={tasksHeadings} data={limitedTasks}/>
      </div>
      <div className="flex justify-end gap-5 py-4">
        <button
          className="bg-gray-300 rounded-md py-2 px-4 font-semibold"
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        <button
          className="bg-gray-300 rounded-md py-2 px-4 font-semibold"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tasks;
