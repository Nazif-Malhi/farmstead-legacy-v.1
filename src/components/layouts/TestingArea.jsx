import React from "react";
import styled from "styled-components";
import { TestingCards } from "../cards";
import { sunnylandscape } from "../../assets/images";

const TestingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  background: url(${sunnylandscape});
  background-size: cover;
  background-repeat: no-repeat;
`;

const TestingArea = () => {
  return (
    <TestingContainer>
      <TestingCards type={"Crops Prediction"} url={"crop_recomendation"} />
      <TestingCards type={"Watering Cycle's"} url="crop_disease_detection" />
      <TestingCards type={"Fertilizer Prediction"} url="pest_detection" />
      <TestingCards type={"Pest Detection"} url="crop_recomendation" />
    </TestingContainer>
  );
};

export default TestingArea;
