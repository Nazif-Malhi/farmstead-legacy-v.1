import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  .filled {
    border-radius: 7px;
    background: #209e2e;
    color: white;
    border: none;
    transition: 0.5s ease-in-out;
    :hover {
      background: #3d7c21;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
  .outline {
    border-radius: 7px;
    background: #eefbf2;
    border: 1px dashed #209e2e;
    :hover {
      border-radius: 7px;
      background: #209e2e;
      color: white;
      border: none;
      transition: 0.5s ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
  .custom {
    font-family: "Rubik", sans-serif;
    font-style: bolder;
    font-weight: 500;
    border-radius: 25px;
    background: #eefbf2;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    color: #209e2e;
  }
`;

const CustomButton = ({
  type,
  children,
  width,
  height,
  style,
  onClick,
  ...props
}) => {
  return (
    <ButtonStyle>
      <button
        className={type}
        {...props}
        onClick={onClick}
        style={{ width: width, height: height, ...style }}
      >
        {children}
      </button>
    </ButtonStyle>
  );
};

export default CustomButton;
