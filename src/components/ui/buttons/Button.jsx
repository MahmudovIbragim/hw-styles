// import React from 'react'
// import ButtonStyle from '../buttons/ButtonStyle.css'

// const Button = ({ clName, onClick, btnName}) => {
//   return (
//     <button className={`${ButtonStyle} ${clName}`} onClick={onClick}>{btnName}</button>
//   )
// }

// export default Button

import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 8px 18px;
  cursor: pointer;
  color: white;
  background-color: blue;

  &:hover {
    background-color: rgba(0, 0, 255, 0.734);
    box-shadow: 0 0 15px rgb(0, 0, 255);
  }
`;

const GenreButton = styled.button`
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 8px 18px;
  cursor: pointer;
  color: white;
  background-color: rgb(0, 157, 255);

  &:hover {
    background-color: rgb(0, 157, 255);
    box-shadow: 0 0 15px rgb(0, 157, 255);
  }
`;

const Button = ({ clName, onClick, btnName, genre }) => {
  const StyledButton = genre ? GenreButton : ButtonStyle;
  const ButtonCss = styled.button`
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    padding: 8px 18px;
    cursor: pointer;
    color: white;
    background-color: blue;

    &:hover {
      background-color: rgba(0, 0, 255, 0.734);
      box-shadow: 0 0 15px rgb(0, 0, 255);
    }
  `;
  return <ButtonCss onClick={onClick} >{btnName}</ButtonCss>

  // return (
  //   <div>
  //     <GenreButton>
  //       <StyledButton className={clName} onClick={onClick}>
  //         {btnName}
  //       </StyledButton>
  //     </GenreButton>
  //   </div>
  // );
};

export default Button;
