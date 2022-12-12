import React from "react";
import styled from "styled-components";
import { labortarty_test } from "../../assets";

const BackContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background: url(${labortarty_test});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Input_Card = styled.div`
  width: 40%;
  height: 70%;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`;

const Crop_Recomendation = () => {
  return (
    <BackContainer>
      <Input_Card>
        <h4>Please Fill Form</h4>
      </Input_Card>
    </BackContainer>
  );
};

export default Crop_Recomendation;
