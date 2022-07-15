import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Armoury from "./Components/Pages/Armoury";
import About from "./Components/Pages/About";
import data from "./data";

function App() {
  const { products } = data;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Armoury"
            element={<Armoury products={products} />}
          ></Route>
          <Route path="/About" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
