import React from "react";
import styled from "styled-components";
import Search from "../search/Search";

const HeaderContainer = styled.div`
  position: fixed;
  right:0;
  left: 0 ;
  height: 50px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: white;
  padding: ${({ isMobile }) => isMobile ? "0px 8px" : '0px 40px'};
`;
const ButtonContainer = styled.div`
  button {
    border-radius: 5px;
    border-style: none;
    color: gray;
    padding: 5px ;
    cursor: pointer;
    margin: 0px 8px ;
  }
  .btn-1 {
    color: white;
    background-color: transparent;
  }
`;
const Header = ({ handleChange, inputText, isMobile }) => {
  return (
    <>
      <HeaderContainer isMobile={isMobile}>
        <div className="lable">My Gallary</div>
        {!isMobile && (
          <Search
            value={inputText}
            onChange={handleChange}
            isMobile={isMobile}
          />
        )}
        {!isMobile && (
          <ButtonContainer>
            <button className="btn-1" disabled={true}>
              Login
            </button>
            <button className="btn-2">Sign Up</button>
          </ButtonContainer>
        )}
      </HeaderContainer>
      {isMobile && (
        <div
          style={{
            marginTop: "48px",
            border: "1px solid #d3d3d3",
            position: "fixed",
            right: 0,
            left: 0,
            top: 0,
            background: "yellow",
          }}
        >
          <Search
            value={inputText}
            onChange={handleChange}
            isMobile={isMobile}
          />
        </div>
      )}
    </>
  );
};

export default Header;
