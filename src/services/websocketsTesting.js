import { toast } from "react-toastify";
const sendData1 = (message) => {
  const ws = new WebSocket("ws://192.168.2.22:8766");

  ws.onopen = () => {
    console.log("connected to WebSocket server");
    ws.send(JSON.stringify(message));
  };
  ws.onmessage = (event) => {
    if (event.data instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        const receivedData = JSON.parse(reader.result);
        toast.success(receivedData.message);
        console.log(receivedData);
        // ws.close();
      };
      reader.readAsText(event.data);
    } else {
      const receivedData = JSON.parse(event.data);
      toast.success(receivedData);
      console.log(receivedData);
      // ws.close();
    }
  };
  ws.onerror = (error) => {
    console.log("Websocket error:", error);
  };
};
export default sendData1;
