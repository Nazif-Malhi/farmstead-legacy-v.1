import React, { useState, useRef } from "react";
import styled from "styled-components";
import { labortarty_test } from "../../assets";
import { Row, Button } from "react-bootstrap";
import { AiOutlineUpload } from "react-icons/ai";

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
  text-align: center;
  padding: 22px;
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

const Upload = styled.div`
  border-radius: 7px;
  width: 100%;
  height: 220px;
  border: 2px dashed #a2abb6;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  :hover {
    cursor: pointer;
    border: 2px dashed #3b4f66;
    color: #3b4f66;
    h6 {
      color: #3b4f66;
    }
  }
  p {
    color: #a2abb6;
  }
  h6 {
    color: #a2abb6;
  }
  .buttonadd {
    width: 40%;
    padding: 23px;
    padding: 36px !important;
  }
 
`;

const Crop_Disease_Detection = () => {
  const [file, set_File] = useState(null);
  const inputRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    set_File(event.dataTransfer.files[0]);
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <BackContainer>
      <Input_Card>
        <h4>Upload Image</h4>
        {!file ? (
          <Upload onDragOver={handleDragOver} onDrop={handleDrop} style={{marginBottom:"20px"}}>
            <AiOutlineUpload style={{ fontSize: "5.7rem", color: "a2abb6" }} />

            <h6>Drag & Drop here</h6>
            <input
              type={"file"}
              onChange={(e) => {
                set_File(e.target.files[0]);
              }}
              hidden
              multiple
              ref={inputRef}
            />
          </Upload>
        ) : (
          <Upload>
            <h6>{file.name}</h6>
          </Upload>
        )}
        <Row style={{ textAlign: "center" }}>
          <div className="buttonadd">
            <Button
              style={{ background: "#a600a0", border: "none" }}
              onClick={onButtonClick}
            >
              Click to upload
            </Button>
          </div>
        </Row>
      </Input_Card>
    </BackContainer>
  );
};

export default Crop_Disease_Detection;
