import React from "react";
import "./Search.scss";
import SearchInput from "./Input";
import Filter from "./Filter";

const Search = ({ value, change }) => {
  return (
    <div className="search">
      <div className="search-field">
        <SearchInput value={value} change={change} />
      </div>
      <div className="filter-container">
        <Filter name="Bids" />
        <Filter name="Status" />
      </div>
    </div>
  );
};

export default Search;
