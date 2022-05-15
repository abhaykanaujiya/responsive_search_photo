import React from "react";
import styled from "styled-components";

const StyledError = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content:  center;
  background: red;
  color: white;
  padding-top: 50px;
`;

const Error = ({ isError }) => {
  return (
    <StyledError>
      <h3>Something went wrong!</h3>
    </StyledError>
  );
};

export default Error;
