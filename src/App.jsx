import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userName" element={<UserDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
