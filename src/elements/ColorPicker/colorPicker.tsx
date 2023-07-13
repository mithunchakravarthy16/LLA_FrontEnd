import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  max-width: auto;
  padding: 8px;
  border: 1px solid #bfc9d9;
  border-radius: 4px;

  input[type="color"] {
    margin-right: 8px;
    -webkit-appearance: none;
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;
    padding: 10;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 10;
      width: 80px;
      height: 40px;
      margin: 10;
    }
    &::-webkit-color-swatch {
      border: 1px solid #bfc9d9;
      border-radius: 4px;
      padding: 10;
      margin: 10;
    }
  }

  input[type="text"] {
    border: none;
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.5px;
  }
`;

const ColorPicker = (props: any) => {
  return (
    <Container>
      <input type="text" {...props} />
      <input type="color" {...props} />
    </Container>
  );
};

export default ColorPicker;

// export default function App() {

//   return (
//     <div className="App">
//       <ColorPicker onChange={handleInput} value={state} />
//     </div>
//   );
// }
