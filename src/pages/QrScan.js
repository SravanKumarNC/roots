import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import sendData1 from "../services/websocketsTesting";
import TasksService from "../services/TasksService";

const QrScan = () => {
  const [scanResult, setScanResults] = useState(null);
  const { task } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    tasks: "",
    binLocation: "",
    status: "",
    assignee: "",
  });
  const workStatus = "on Going";
  const Assignee = "driver 1";

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 200,
          height: 200,
        },
        fps: 20,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
      },
      []
    );
    const success = (result) => {
      scanner.clear();
      setScanResults(result);
    };
    const error = (error) => {
      console.warn(error);
    };
    scanner.render(success, error);
  }, []);
  const handleAssign = async () => {
    if (task !== null) {
      setData({
        ...data,
        tasks: task,
        binLocation: scanResult,
        status: workStatus,
        assignee: Assignee,
        timestamp: new Date(),
      });
    } else {
      toast.error("Select Pick or Drop");
    }
    const dataToSend = scanResult + "," + task;
    // sendData(dataToSend);
    sendData1(dataToSend);
  };
  useEffect(() => {
    if (data.tasks && data.binLocation) {
      TasksService.addTask(data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/scan");
      toast.success("Task Assigned");
    }
    console.log(data);
  }, [data, navigate]);

  return (
    <div>
      {/* <div>
        <h1>QR code Scanner</h1>
      </div> */}
      {/* {scanResult ? (
        <div className="flex items-center justify-center">
          {" "}
          Success : {scanResult}
        </div>
      ) : (
        <div id="reader"></div>
      )} */}

      {scanResult ? (
        <div className="flex items-center justify-center w-full min-h-screen">
          <div className="w-[30%] h-[25%]   space-y-6 rounded-lg">
            <div className="flex justify-center font-bold text-3x bg-gray-200 py-4 rounded-md">
              Detected QR : {scanResult}
            </div>
            <div className="flex justify-center space-x-2 font-bold ">
              <button
                className={`bg-orange-400 ${
                  task === "Pick" ? "border-2 border-blue-400" : ""
                } px-4 py-2 rounded-md hover:bg-orange-300`}
              >
                Picking
              </button>
              <button
                className={`bg-orange-400 ${
                  task === "Drop" ? "border-2 border-blue-400" : ""
                } px-4 py-2 rounded-md hover:bg-orange-300`}
              >
                put away
              </button>
            </div>
            <div className="flex justify-center space-x-8  items-center mr-4">
              <button
                className="bg-green-400 font-bold text-xl px-6 py-2 rounded-md hover:bg-green-300"
                onClick={() => {
                  navigate("/scan");
                }}
              >
                Re-Scan
              </button>
              <button
                className="bg-green-400 font-bold text-xl px-6 py-2 rounded-md hover:bg-green-300"
                onClick={handleAssign}
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
};

export default QrScan;
