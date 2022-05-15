import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  /* display: grid; */
  display: ${({ isMobile }) => (isMobile ? "flex" : "grid")};
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-columns: ${({ isMobile }) =>
    isMobile ? "1fr 1fr" : "0fr 0fr 0fr 0fr"};
  grid-auto-rows: 275px;
  justify-content: center;
  padding: ${({ isMobile }) => (isMobile ? "50px 0px" : "51px")};
`;

const CardImage = styled.img`
  border: 1px solid white;
  width: ${({ isMobile, width }) => (isMobile ? `100%` : "411px")};
  height: 270px;
  object-fit: fill;
  max-width: ${({ isMobile, width }) =>
    isMobile ? `48vw` : "411px"};
`;
export const Card = ({ searchResult, isMobile, width }) => {
  return (
    <CardContainer isMobile={isMobile}>
      {searchResult?.photos?.photo.map((v) => (
        <CardImage
          width={width}
          isMobile={isMobile}
          src={`https://live.staticflickr.com/${v.server}/${v.id}_${v.secret}.jpg`}
        />
      ))}
    </CardContainer>
  );
};
