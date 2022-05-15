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
import VerifyEmail from "./Pages/VerifyEmail";
import Dashboard from "./Pages/Dashboard";
import MyAppointments from "./Pages/MyAppointments";
import MyReview from "./Pages/MyReview";
import MyHistory from "./Pages/MyHistory";

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
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route index element={<MyAppointments />} />
          <Route path="/dashboard/my-appointment" element={<MyAppointments />} />
          <Route path="/dashboard/my-review" element={<MyReview />} />
          <Route path="/dashboard/my-history" element={<MyHistory />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
