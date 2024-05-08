import React, { useRef, useEffect, useState } from "react";
import jsQR from "jsqr";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Qr = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [detectedQRCode, setDetectedQRCode] = useState(null);
  const [task, setTask] = useState(null);

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
      canvas.width = 1080;
      canvas.height = 580;
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
      .getUserMedia({ video: { facingMode: "user" } })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => console.error("Error accessing the camera:", err));

    video.addEventListener("play", () => {
      canvas.width = 1080;
      canvas.height = 580;
      requestAnimationFrame(scanQRCode);
    });

    return () => {
      isScanning = false;
    };
  }, [selectedArea]);

  const handlePick = () => {
    setTask("Pick");
    toast.success("Task : Pick Up");
  };

  const handleDrop = () => {
    setTask("Drop");
    toast.success("Task : Drop");
  };

  const handleAssign = () => {
    if (task !== null) {
      navigate("/home");
      toast.success("Task Assigned");
    } else {
      toast.success("Task : Pick Up");
    }
  };

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
          <div className="w-[30%] h-[25%] bg-slate-200 space-y-6 rounded-lg">
            <div className="flex justify-center font-bold text-3xl">
              Detected QR : {detectedQRCode}
            </div>
            <div className="flex justify-center space-x-4 font-bold ">
              <button
                className="bg-orange-300 px-4 py-2 rounded-md"
                onClick={handlePick}
              >
                Pick up
              </button>
              <button
                className="bg-orange-300 px-4 py-2 rounded-md"
                onClick={handleDrop}
              >
                Drop
              </button>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-green-400 font-bold text-xl px-6 py-2 rounded-md"
                onClick={handleAssign}
              >
                Assign
              </button>
            </div>
          </div>
          {/* <button
          className="bg-green-500 rounded-md"
          // onClick={handleRescan}
        ></button>
        <div className="detected-qr">Detected QR code: {detectedQRCode}</div> */}
        </div>
      )}
    </div>
  );
};

export default Qr;
