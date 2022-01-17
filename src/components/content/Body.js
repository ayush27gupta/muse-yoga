import React from "react";
import { useNavigate } from "react-router-dom";

import "../content/body.css";

function Body() {
  // const [data, setData] = useState(0);

  let navigate = useNavigate();

  // const handleChange = (e) => {
  //   setData(([e.target.data] = e.target.value));
  // };

  const handleClick = (e) => {
    const heartRate = e.target.value;
    navigate("/yoga", { state: { heartRate: heartRate } });
  };

  return (
    <div className="body-main">
      <div className="jumbotron container-body">
        <h1 className="display-3 head-body">Welcome To Mental-Yog</h1>
        <p className="lead"></p>
        <hr className="my-4" />

        {/* <p className="sub-head-body">Enter your heart-rate</p>
        <input
          type="text"
          className="py-2 mb-3 inp-body"
          value={data}
          id="data"
          onChange={handleChange}
        /> */}
        <p className="lead para-body-btn">
          <button
            className="btn btn-success btn-lg body-btn"
            onClick={handleClick}
          >
            Click to get Recommended Yoga
          </button>
        </p>
      </div>
    </div>
  );
}

export default Body;
