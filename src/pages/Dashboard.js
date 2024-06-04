import React,{useState, useEffect} from "react";
import Box from "../components/Box";
import LineChart from "../components/LineChart";
import TasksService from "../services/TasksService";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [count, setCount]= useState(0);
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
  useEffect(()=>{
    const isToday = (timeStamp) => {
      const today = new Date().toISOString().slice(0,10);
      return timeStamp.startsWith(today)
    }

    const countTodayEntries = () => {
      let todayCount = 0;
      data.forEach(entry => {
        if(isToday(entry.createdAt) || isToday(entry.updatedAt)){
          todayCount += 1;
        }
      })
      setCount(todayCount);
    };
    countTodayEntries()
  },[data])
  console.log(data.length)
  return (
    <div className="h-screen p-4">
      <div className="flex flex-col items-center w-full space-y-4 h-screen">
        <h1 className="text-3xl font-bold">Statistics Dashboard</h1>
        <div className="flex space-x-2 w-full justify-center">
          <Box title={"Today Tasks Done"} value={count}/>
          <Box title={"Total Tasks Done"} value={data.length}/>
        </div>
        <LineChart />
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
