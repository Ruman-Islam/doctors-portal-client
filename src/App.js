import { Route, Routes } from "react-router-dom";
import Navbar from './components/Common/Navbar';
import Appointment from "./Pages/Appointment";
import Login from './Pages/Login';
import About from "./Pages/About";
import Home from "./Pages/Home";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Signup from "./Pages/Signup";
import ResetPassword from "./Pages/ResetPassword";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
