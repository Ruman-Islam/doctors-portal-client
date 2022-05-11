import { Route, Routes } from "react-router-dom";
import Navbar from './components/Common/Navbar';
import Appointment from "./Pages/Appointment";
import Login from './Pages/Login';
import About from "./Pages/About";
import Home from "./Pages/Home";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
