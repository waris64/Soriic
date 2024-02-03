import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./Pages/Cards";
import Task from "./Pages/Task";
import Template from "./Pages/Template";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";  
import Footer from "./Pages/Footer";
import './App.css';
import Carousel from "./Pages/Carousel";
function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/task" element={<Task />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/template" element={<Template />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carousel" element={<Carousel/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
