import React from "react";
import styled from "styled-components";
import Focusing from "../layouts/Focusing";
import Home from "../layouts/Home";
import TestHeading from "../layouts/TestHeading";
import TestingArea from "../layouts/TestingArea";

const MockUpContainer = styled.div`
  background: #eefbf2;
`;

const MockUp = () => {
  return (
    <MockUpContainer>
      <Home />
      <TestHeading />
      <TestingArea />
      <Focusing />
    </MockUpContainer>
  );
};

export default MockUp;
