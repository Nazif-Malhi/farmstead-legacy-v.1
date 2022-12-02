import React from "react";
import styled from "styled-components";
import { background } from "../../assets";
import { CircularCard } from "../circle";

const WorkContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  background: url(${background}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  ::before {
    position: absolute;
    content: "";
    top: calc((10%) / 2);
    left: calc((5%) / 2);
    width: 95%;
    height: 90%;
    // backdrop-filter: blur(7px) saturate(151%);
    // -webkit-backdrop-filter: blur(7px) saturate(151%);
    // background-color: rgba(255, 255, 255, 0.18);
    // border-radius: 12px;
    // border: 1px solid rgba(209, 213, 219, 0.3);
    backdrop-filter: blur(6px) saturate(151%);
    -webkit-backdrop-filter: blur(6px) saturate(151%);
    background-color: rgba(255, 255, 255, 0.46);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
  }
  h1 {
    margin-top: 50px;
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    color: black;
    z-index: 1;
  }
  .wrapper-container {
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Work = () => {
  return (
    <WorkContainer>
      <h1>Our Areas</h1>

      <div className="wrapper-container">
        <CircularCard />
        <CircularCard />
        <CircularCard />
        <CircularCard />
      </div>
    </WorkContainer>
  );
};

export default Work;
