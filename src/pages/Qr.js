import React, { useRef, useEffect, useState } from "react";
import jsQR from "jsqr";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TasksService from "../services/TasksService";
import sendData from "../services/WebSockets";
import sendData1 from "../services/websocketsTesting";

const Qr = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [detectedQRCode, setDetectedQRCode] = useState(null);

  const { task } = useParams();
  console.log(task);
  const [data, setData] = useState({
    tasks: "",
    binLocation: "",
    status: "",
    assignee: "",
  });
  const workStatus = "on Going";
  const Assignee = "driver 1";

  const navigate = useNavigate();

  const handleCanvasClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setSelectedArea({ x: offsetX, y: offsetY });
  };

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let isScanning = true;

    const scanQRCode = () => {
      if (!isScanning) return;
      canvas.width = 800;
      canvas.height = 600;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      if (selectedArea) {
        const { x, y } = selectedArea;
        const qrCodeSize = 100;

        ctx.strokeStyle = "#00ff00";
        ctx.lineWidth = 2;
        ctx.strokeRect(
          x - qrCodeSize / 2,
          y - qrCodeSize / 2,
          qrCodeSize,
          qrCodeSize
        );

        if (
          x - qrCodeSize / 2 >= 0 &&
          y - qrCodeSize / 2 >= 0 &&
          x + qrCodeSize / 2 <= canvas.width &&
          y + qrCodeSize / 2 <= canvas.height
        ) {
          const imageData = ctx.getImageData(
            x - qrCodeSize / 2,
            y - qrCodeSize / 2,
            qrCodeSize,
            qrCodeSize
          );
          const code = jsQR(imageData.data, imageData.width, imageData.height);

          if (code && code.data) {
            setDetectedQRCode(code.data);
            console.log(code.data);
            isScanning = false;
          } else {
            setDetectedQRCode(null);
          }
        } else {
          setDetectedQRCode(null);
        }
      } else {
        setDetectedQRCode(null);
      }

      requestAnimationFrame(scanQRCode);
    };

    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 800 },
          height: { ideal: 800 },
        },
      })
      .then((stream) => {
        video.srcObject = stream;
        video.play().catch((err) => {
          console.error("Error playing video:", err);
        });
      })
      .catch((err) => console.error("Error accessing the camera:", err));

    video.addEventListener("loadedmetadata", () => {
      scanQRCode();
    });

    return () => {
      isScanning = false;
    };
  }, [selectedArea]);

  const handleAssign = async () => {
    if (task !== null) {
      setData({
        ...data,
        tasks: task,
        binLocation: detectedQRCode,
        status: workStatus,
        assignee: Assignee,
        timestamp: new Date(),
      });
    } else {
      toast.error("Select Pick or Drop");
    }
    const dataToSend = detectedQRCode + "," + task;
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
    <div className="flex flex-col justify-center items-center h-screen m-auto">
      {detectedQRCode === null ? (
        <div className="App">
          <video
            ref={videoRef}
            width="720"
            height="900"
            autoPlay
            className="hidden"
          ></video>
          <canvas ref={canvasRef} onClick={handleCanvasClick}></canvas>
          {detectedQRCode && (
            <div className="detected-qr">
              Detected QR code: {detectedQRCode}
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}

      {detectedQRCode && (
        <div className="flex items-center justify-center w-full min-h-screen">
          <div className="w-[30%] h-[25%]   space-y-6 rounded-lg">
            <div className="flex justify-center font-bold text-3x bg-gray-200 py-4 rounded-md">
              Detected QR : {detectedQRCode}
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
      )}
    </div>
  );
};

export default Qr;
