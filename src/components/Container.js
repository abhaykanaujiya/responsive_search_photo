import React from "react";
import Header from "./header/Header";

export const Container = ({ children, handleChange, inputText, isMobile }) => {
  return (
    <>
      <Header handleChange={handleChange} inputText={inputText} isMobile={isMobile} />
      <div style={{ paddingTop: isMobile ? "50px" : "0" }}>{children}</div>
    </>
  );
};
