import React from "react";
import "./Input.scss";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  & ::-webkit-input-placeholder {
    font-size: 1rem;
  }

  @media(min-width: $breakpoint-web) {
    height: 50px;
  }
`;

const SearchInput = ({ value, change }) => {
  return (
    <div>
      <StyledTextField
        className="search-input"
        variant="outlined"
        placeholder="Search for applicant"
        value={value}
        onChange={change}
        InputProps={{
          style: { fontSize: "1rem", height: "100%" },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="search-icon" />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchInput;
