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
        <p className="head-body">
          <strong>Mind and body connection and the benefits of yoga</strong>
        </p>
        <p className="head-body para-head">
          Yoga is known to have a calming effect on the body and many of these
          poses have a stress relieving effect. The balance and strength of the
          body combined with the focus of calming and clearing the mind reflects
          in mind and body unity, so it's not surprising that many people turn
          to this alternative therapy for healing.
        </p>
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
