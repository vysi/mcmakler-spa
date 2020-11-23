import React from "react";
import "./Filter.scss";
import Dropdown from "react-bootstrap/Dropdown";

const Filter = ({ name }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="white btn-lg" id="dropdown-basic">
        {name}
      </Dropdown.Toggle>
      <Dropdown.Menu />
    </Dropdown>
  );
};

export default Filter;
