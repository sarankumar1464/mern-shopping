import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/register.jsx";
import Login from "./components/Login/login.jsx";
import Home from "./components/Home/home.jsx";
import NotFound from "./components/Not Found/notfound.jsx";
import ProtectedRoute from "./components/ProtectedRoutes/protectedroute.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
