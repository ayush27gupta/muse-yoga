import React from "react";
import "../music-page/music.css";
import { useLocation } from "react-router-dom";

function Music() {
  const loc = useLocation();
  const heartRate = loc.state.heartRate;

  return (
    <div className="music-main">
      <div className="container-music">
        <h1>Music Page </h1>
        <h3>{`Your heart Rate is ${heartRate}`}</h3>
      </div>
    </div>
  );
}

export default Music;
