import React from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: white;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Cards = () => {
  return <CardsContainer></CardsContainer>;
};

export default Cards;
