import React, { useState } from "react";
import styled from "styled-components";
import { labortarty_test } from "../../assets";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

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
  align-items: center;
  flex-direction: column;
  h4 {
    margin-top: 20px;
  }
  .row-rb {
    width: 100%;
    padding: 0px 30px;
  }
`;

const Crop_Recomendation = () => {
  const [model, setModel] = useState("");

  return (
    <BackContainer>
      <Input_Card>
        <h4>Please Fill Form</h4>
        <Row className="row-rb">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Type</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={model}
              label="Type"
              onChange={(e) => setModel(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Simple"}>Simple</MenuItem>
              <MenuItem value={"Advance"}>Advance</MenuItem>
            </Select>
          </FormControl>
        </Row>
        <Row>
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
        </Row>
      </Input_Card>
    </BackContainer>
  );
};

export default Crop_Recomendation;
