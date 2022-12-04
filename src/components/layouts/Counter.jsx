import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const CounterWrraper = styled.div`
  display: flex;

  width: 80%;
  height: 25vh;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 7px;
  background: white;
  align-item: center;
  justify-content: center;
  .row-counthead {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 10px;
  }

  .br {
    border-right: 1px dashed #209e2e;
  }
  .col-counthead {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      color: #209e2e;
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 42px;
    }
    h6 {
      color: #209e2e;
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

const Counter = () => {
  return (
    <CounterWrraper>
      <Row className="row-counthead">
        <Col className="col-counthead br">
          <h1>200+</h1>
          <h6>Users</h6>
        </Col>
        <Col className="col-counthead br">
          <h1>400+</h1>
          <h6>Attended Events</h6>
        </Col>
        <Col className="col-counthead br">
          <h1>24/7</h1>
          <h6>Our Service</h6>
        </Col>
        <Col className="col-counthead">
          <h1>400+</h1>
          <h6>Collabration</h6>
        </Col>
      </Row>
    </CounterWrraper>
  );
};

export default Counter;
