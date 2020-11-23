import React from "react";
import "./Counters.scss";

const Counters = ({ total, viewed, appointment }) => {
  return (
    <div className="counters">
      <div>
        <h1>{total}</h1>
        <p>Total</p>
      </div>
      <div>
        <h1>0</h1>
        <p>New</p>
      </div>
      <div>
        <h1>{viewed}</h1>
        <p>Viewed</p>
      </div>
      <div>
        <h1>{appointment}</h1>
        <p>Appointment</p>
      </div>
      <div>
        <h1>0</h1>
        <p>Others</p>
      </div>
    </div>
  );
};

export default Counters;
