import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

import Home from "./components/home/home";
import About from "./components/about/about"
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"about"} element={<About/>} />
          <Route path={"projects"} element={<About/>} />
          <Route path={"admin"} element={<About/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
