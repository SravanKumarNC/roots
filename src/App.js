import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Qr from "./pages/Qr";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tasks from "./pages/Tasks";
import Records from "./pages/Records";
import SystemLogs from "./pages/SystemLogs";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route index={true} element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="/scan" element={<Home />}></Route>
          <Route path="/qr/:task" element={<Qr />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/records" element={<Records />}></Route>
          <Route path="/logs" element={<SystemLogs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
