import React from "react";
import styled from "styled-components";
// import { TestingCards } from "../cards";
import { sunnylandscape } from "../../assets/images";
import { CarouselWapper } from "../carousel/carousel2";


const TestingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  background: url(${sunnylandscape});
  background-size: cover;
  background-repeat: no-repeat;
  padding-left:120px;
  padding-right:120px;
`;

const TestingArea = () => {
  const cards=["Crops Prediction", "Watering Cycle's","Fertilizer Prediction","Crops Diseases Detection", "Pest Detection","Fertilizer Prediction" ];
  return (
    <TestingContainer>
      {/* <TestingCards type={"Crops Prediction"} />
      <TestingCards type={"Watering Cycle's"} />
      <TestingCards type={"Fertilizer Prediction"} /> */}
      <CarouselWapper  cards={cards} />
          
      

    </TestingContainer>
  );
};

export default TestingArea;
