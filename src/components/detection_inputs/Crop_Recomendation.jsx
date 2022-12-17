import React, { useState } from "react";
import styled from "styled-components";
import {
  crop_recomendation1,
  crop_recomendation2,
  labortarty_test,
} from "../../assets";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { Row, Button } from "react-bootstrap";
import { simple_crop } from "../../apis";

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
  height: auto;
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
    margin: 8px;
  }
  .row-rb * {
    margin: 1px;
  }
`;

const Crop_Recomendation = () => {
  const [model, setModel] = useState("");
  const [crop, setCrop] = useState("");

  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [ph, setPh] = useState(0);
  const [nitrogen, setNitrogen] = useState(0);
  const [phosphorus, setPhosphorus] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [rain, setRain] = useState(0);

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
        <Row className="row-rb">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Soil Type</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={crop}
              label="Type"
              onChange={(e) => setCrop(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {model === "Advance"
                ? crop_recomendation2.map((val, id) => {
                    return (
                      <MenuItem value={val} key={id}>
                        {val}
                      </MenuItem>
                    );
                  })
                : model === "Simple"
                ? crop_recomendation1.map((val, id) => {
                    return (
                      <MenuItem value={val} key={id}>
                        {val}
                      </MenuItem>
                    );
                  })
                : null}
            </Select>
          </FormControl>
        </Row>
        <Row className="row-rb">
          <TextField
            fullWidth
            label="Temprature"
            id="outlined-size-small"
            defaultValue={temperature}
            size="small"
            onChange={(e) => setTemperature(e.target.value)}
          />
        </Row>
        <Row className="row-rb">
          <TextField
            fullWidth
            label="Humidity"
            id="outlined-size-small"
            defaultValue={humidity}
            size="small"
            onChange={(e) => setHumidity(e.target.value)}
          />
        </Row>
        <Row className="row-rb">
          <TextField
            fullWidth
            label="Ph"
            id="outlined-size-small"
            defaultValue={ph}
            size="small"
            onChange={(e) => setPh(e.target.value)}
          />
        </Row>
        <Row className="row-rb">
          <TextField
            fullWidth
            label="rain"
            id="outlined-size-small"
            defaultValue={rain}
            size="small"
            onChange={(e) => setRain(e.target.value)}
          />
        </Row>
        {model === "Advance" ? (
          <>
            <Row className="row-rb">
              <TextField
                fullWidth
                label="Nitrogen"
                id="outlined-size-small"
                defaultValue={nitrogen}
                size="small"
                onChange={(e) => setNitrogen(e.target.value)}
              />
            </Row>
            <Row className="row-rb">
              <TextField
                fullWidth
                label="Phosphorus"
                id="outlined-size-small"
                defaultValue={phosphorus}
                size="small"
                onChange={(e) => setPhosphorus(e.target.value)}
              />
            </Row>
            <Row className="row-rb">
              <TextField
                fullWidth
                label="Potassium"
                id="outlined-size-small"
                defaultValue={potassium}
                size="small"
                onChange={(e) => setPotassium(e.target.value)}
              />
            </Row>
          </>
        ) : null}
      </Input_Card>
    </BackContainer>
  );
};

export default Crop_Recomendation;
