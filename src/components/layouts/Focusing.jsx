import React from "react";
import styled from "styled-components";
import {
  cities,
  consumtion_production,
  economic_growth,
  infrastructure,
  no_poverty,
  world,
  zero_hunger,
} from "../../assets";
import { Circular } from "../circle";

const FocusContainer = styled.div`
  width: 100%;
  height: 170vh;
  display: flex;
  padding: 20px 0px;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  h1 {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    color: black;
  }
  .border {
    margin-top: 160px;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    border-radius: 50%;
    background: black;
    position: absolute;
  }

  .style-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: auto;
      height: 450px;
      -webkit-animation: spin 2s linear infinite; /* Safari */
      animation: spin 360s linear infinite;
      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }

  
`;






const Focusing = () => {
  
  return (
    <FocusContainer>
      <h1>Our Vision</h1>

      <Circular num={0} img={no_poverty} clr={"#ffbb00"} head={"No Poverty"}   />
      <Circular
        num={1}
        img={economic_growth}
        clr={"#ff0000"}
        head={"Economic Growth"}
      />
      <Circular
        num={2}
        img={zero_hunger}
        clr={"#04fc43"}
        head={"Zero Hunger"}
      />
      <Circular
        num={3}
        img={infrastructure}
        clr={"#007bff"}
        head={"Infrastructure"}
      />
      <Circular num={4} img={cities} clr={"#aeff00"} head={"Inovation"} />
      <Circular
        num={5}
        img={consumtion_production}
        clr={"#04fc43"}
        head={"Consumption"}
        className='consumption'
      />
      {/* <div className="border"></div> */}
      <div className="style-wrapper">
        <img src={world} alt="world" />
      </div>
    </FocusContainer>
  );
};

export default Focusing;
