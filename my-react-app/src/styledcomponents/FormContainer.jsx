import React from "react";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  width: 500px;
  background-color: #252525; // 배경색
  border-radius: 12px; // 둥근 모서리
  padding: 20px; // 내부 여백
  color: white; // 텍스트 색상
  z-index: 1000;
`;

const FormContainer = ({ children }) => {
  return <StyledFormContainer>{children}</StyledFormContainer>;
};

export default FormContainer;
