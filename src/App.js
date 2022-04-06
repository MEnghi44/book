import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./component/Navbar";
import Description from "./pages/description";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/Description" element={<Description/>}/>
          </Routes>
    </BrowserRouter>
  );
};
export default App;
