import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Shape } from "../../assets";

const BlogContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 74%,
    rgba(238, 251, 242, 1) 100%
  );

  .row-full {
    width: 100%;
    height: 220px;
    padding: 60px;
    .text-heading {
      width: 100%;
      display: flex;
      flex-direction: column;
      border-right: 1px solid #90ed99;
      h5 {
        color: #209e2e;
      }
      h1 {
        margin-top: 20px;
        font-family: "Rubik", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
      }
    }
    .detailed-section {
      padding: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        color: #7a7e9a;
        font-family: "Rubik", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
      }
    }
  }
  .shadow {
    position: absolute;
    img {
      width: 600px;
      height: auto;
      box-shadow: none;
    }
  }
`;

const Blog = () => {
  return (
    <BlogContainer>
      <Row className="row-full">
        <Col className="text-heading">
          <h5>ENHANCE YOUR SELF</h5>
          <h1>Farming is all about the knowledge of plant</h1>
        </Col>
        <Col className="detailed-section">
          <p>
            Lets have a glance over some great blogs that includes a number of
            helpful posts for those that want to learn about agriculture,
            organic farming, trending agro-products, interesting facts about
            farming, new agro-related techniques and many more things.
          </p>
        </Col>
      </Row>
      <div className="shadow">{/* <img src={Shape} alt="shape" /> */}</div>
    </BlogContainer>
  );
};

export default Blog;
