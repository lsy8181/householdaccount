import React from "react";
import styled from "styled-components";

const SaveBtn = styled.div`
  display: flex;
  width: 88px;
  justify-content: center; // 가로 방향 가운데 정렬
  align-items: center; // 세로 방향 가운데 정렬
  margin: 0 auto;
  background-color: #3c72ff; // 배경색
  border-radius: 5px; // 둥근 모서리
`;

const SaveButton = ({ children }) => {
  return <SaveBtn>{children}</SaveBtn>;
};

export default SaveButton;
