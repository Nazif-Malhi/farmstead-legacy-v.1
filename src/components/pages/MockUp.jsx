import React from "react";
import styled from "styled-components";
import Aboutus from "../layouts/Aboutus";
import Blog from "../layouts/Blog";
import Focusing from "../layouts/Focusing";
import Footer from "../layouts/Footer";
import Home from "../layouts/Home";
import TestHeading from "../layouts/TestHeading";
import TestingArea from "../layouts/TestingArea";
import Work from "../layouts/Work";
import NavbarHeader2 from "../navbar/NavbarHeader2";

const MockUpContainer = styled.div`
  background: #eefbf2;
`;

const MockUp = () => {
  return (
    <MockUpContainer>
      <NavbarHeader2 />
      <Home />
      <TestHeading />
      <TestingArea />
      <Focusing />
      <Work />
      <Blog />
      <Aboutus />
      <Footer />
    </MockUpContainer>
  );
};

export default MockUp;
