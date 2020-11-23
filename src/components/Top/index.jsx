import React from "react";
import "./Top.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Top = () => {
  return (
    <div className="top">
      <ArrowBackIcon className="arrow" />
      <h1>Applicants</h1>
    </div>
  );
};

export default Top;
