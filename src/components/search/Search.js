import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  border-radius: 5px;
  border-style: none;
  width: 360px;
  height: 30px;
  font-size: 14px;
  padding: 5px 8px;
  width: ${({ isMobile } )=> isMobile ? "100%" : '360px'};
`;
const Search = ({ type, value, onChange, isMobile }) => {
  return (
    <SearchInput
      type={type}
      value={value}
      placeholder={"photos, people, groups"}
      className={"input"}
      onChange={onChange}
      isMobile={isMobile}
    />
  );
};

export default Search;
