import React from "react";
import styled from "styled-components";

// 스타일을 적용한 div 생성
const StyledForm = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 5px;
  width: 80px;
  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

const FormStyle = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

export default FormStyle;
