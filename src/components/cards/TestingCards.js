import React from "react";
import styled from "styled-components";
import {
  cardshape,
  cardshapehover,
  cultivate,
  fertilizer,
  watering,
} from "../../assets/images";
import { CustomButton } from "../button";

const TestCardContainer = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  height: 400px;
  width: 300px;
  border-radius: 7px;
  background: white;
  position: relative;
  background: url(${(props) =>
    props.type === "Crops Prediction"
      ? cultivate
      : props.type === "Watering Cycle's"
      ? watering
      : props.type === "Fertilizer Prediction"
      ? fertilizer
      :props.type === "Crops Diseases Detection"
      ? fertilizer
      :props.type === "Pest Detection"
      ? fertilizer
      : null});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  :hover {
    .card-shape {
      background: url(${cardshapehover});
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  .card-shape {
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    width: 300px;
    height: 30vh;
    background: url(${cardshape});
    background-size: cover;
    background-repeat: no-repeat;
    transition: 0.7s ease;
    display: flex;
    flex-direction: column;
    .text-container {
      color: white;
      padding: 10px 30px;
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: 700;
    }
    .button-container {
      margin-bottom: 30px;
      padding-left: 20px;
    }
  }
`;
const TestingCards = ({ type }) => {
  return (
    <TestCardContainer type={type}>
      <div className="card-shape">
        <div className="text-container">
          <h2>{type}</h2>
        </div>
        <div className="button-container">
          <CustomButton type="custom" width={"200px"} height="45px">
            Predict
          </CustomButton>
        </div>
      </div>
    </TestCardContainer>
  );
};

export default TestingCards;
