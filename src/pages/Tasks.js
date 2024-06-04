import React,{useState, useEffect} from "react";
import Table from "../components/Table";
import TasksService from "../services/TasksService";

const Tasks = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TasksService.getTasks();
        // console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const tasksHeadings = [
    "ID",
    "Tasks",
    "Bin Location",
    "Time Stamp",
    "Status",
  ];
  console.log(data)
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl p-4 text-orange-600">
          Tasks 
        </h1>
      </div>
      <div className="flex justify-center w-full ">
        <Table headings={tasksHeadings} data={data}/>
      </div>
    </div>
  );
};

export default Tasks;
