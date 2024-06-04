import { toast } from "react-toastify";
const sendData = (message) => {
  const ws = new WebSocket("ws://192.168.2.22:8765");

  ws.onopen = () => {
    console.log("connected to WebSocket server");
    ws.send(message);
  };
  ws.onmessage = (event) => {
    toast.success(event.data);
    ws.close();
  };
  ws.onerror = (error) => {
    console.log("Websocket error:", error);
  };
};
export default sendData;
