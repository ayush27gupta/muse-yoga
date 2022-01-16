import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../content/Body";
import Music from "../music-page/Music";
import Navbar from "../navbar/Navbar";
import Yoga from "../yoga-page/Yoga";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/home" element={<Body />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
