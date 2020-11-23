import React from "react";
import List from "./List";

const GroupedList = ({ data }) => {
  return (
    <div>
      {Object.entries(data).map((list) => {
        return (
          list[1].length !== 0 && (
            <List key={list[0]} title={list[0]} applicants={list[1]} />
          )
        );
      })}
    </div>
  );
};

export default GroupedList;
