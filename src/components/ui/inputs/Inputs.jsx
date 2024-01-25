import React from "react";
import InputsStyle from "../inputs/InputsStyle.css";
import styled from "styled-components";

const Inputs = ({ text, type, value }) => {
  const StyleInput = styled.input`
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 5px;
    /* background: red; */
    padding: 8px 0px 8px 15px;
    margin: 20px 10px;
  `;
  return <StyleInput type={type} placeholder={text} ref={value} />;
};

export default Inputs;
