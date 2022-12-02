import React from "react";
import styled from "styled-components";
import Counter from "../layouts/Counter";
import Focusing from "../layouts/Focusing";
import Home from "../layouts/Home";
import TestHeading from "../layouts/TestHeading";
import TestingArea from "../layouts/TestingArea";
import Work from "../layouts/Work";

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
      <Work />
      <Counter />
    </MockUpContainer>
  );
};

export default MockUp;
