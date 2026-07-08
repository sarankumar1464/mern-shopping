import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/register.jsx";
import Login from "./components/Login/login.jsx";
import Home from "./components/Home/home.jsx";


import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;