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
      <TestingCards type={"Crops Prediction"} />
      <TestingCards
        type={"Watering Cycle's"}
        url="/models/crop_disease_detection"
      />
      <TestingCards
        type={"Fertilizer Prediction"}
        url="/models/pest_detection"
      />
      <TestingCards type={"Pest Detection"} url="/models/crop_recomendation" />
    </TestingContainer>
  );
};

export default TestingArea;
