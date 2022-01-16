import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../content/body.css";

function Body() {
  const [data, setData] = useState(0);

  let navigate = useNavigate();

  const handleChange = (e) => {
    setData(([e.target.data] = e.target.value));
  };

  const handleClick = (e) => {
    const heartRate = e.target.value;
    navigate("/music", { state: { heartRate: heartRate } });
  };

  return (
    <div className="body-main">
      <div className="jumbotron container-body">
        <h1 className="display-3 head-body">Welcome To Muse-Yoga</h1>
        <p className="lead"></p>
        <hr className="my-4" />

        <p className="sub-head-body">Enter your heart-rate</p>
        <input
          type="text"
          className="py-2 mb-3 inp-body"
          value={data}
          id="data"
          onChange={handleChange}
        />
        <p className="lead para-body-btn">
          <button
            className="btn btn-danger btn-lg body-btn mx-4"
            id="music"
            value={data}
            onClick={handleClick}
          >
            Listen to Music
          </button>
          <Link
            className="btn btn-success btn-lg body-btn"
            to="/yoga"
            role="button"
          >
            Get your body moving with Yoga
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Body;
