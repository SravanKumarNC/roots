import React, { useEffect } from "react";
import { dummy } from "../utils/ErrorMessageDummyData";
import LogTable from "../components/LogTable";
import { toast } from "react-toastify";
import sendData1 from "../services/websocketsTesting";

const SystemLogs = () => {
  const message = "update";

  sendData1(message);

  const logsHeadings = ["ID", "Error Message", "Timestamp"];
  // console.log(dummy);
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl p-4 text-orange-600">System Logs</h1>
      </div>
      <div className="flex justify-center w-full ">
        <LogTable headings={logsHeadings} data={dummy} />
      </div>
    </div>
  );
};

export default SystemLogs;
