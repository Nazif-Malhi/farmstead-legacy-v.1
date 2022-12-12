import React, { useState } from "react";
import styled from "styled-components";
import { labortarty_test } from "../../assets";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Row } from "react-bootstrap";

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
  display: flex;
  align-items:center: center;
  flex-direction: column;
  .row-rb{
    width:100%;
padding:0px 30px;
  }
`;

const Fertilizer_Recomendation = () => {
  const [model, setModel] = useState("");

  return (
    <BackContainer>
      <Input_Card>
        <h4>Please Fill Form</h4>
        <Row className="row-rb">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={model}
              label="Age"
              onChange={(e) => setModel(e.target.value)}
              size="small"
            >
              <MenuItem value={"Simple"}>Simple</MenuItem>
              <MenuItem value={"Advance"}>Advance</MenuItem>
            </Select>
          </FormControl>
        </Row>
      </Input_Card>
    </BackContainer>
  );
};

export default Fertilizer_Recomendation;
