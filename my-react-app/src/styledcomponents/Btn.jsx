import React from "react";
import styled from "styled-components";

const MainBtn = styled.div`
  display: flex;
  width: 20px;
  justify-content: center; // 가로 방향 가운데 정렬
  align-items: center; // 세로 방향 가운데 정렬
  border: 1px solid #ccc;
  background-color: #ffffff; // 배경색
  border-radius: 5px; // 둥근 모서리
  color: #252525;
  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

const MainButton = ({ children }) => {
  return <MainBtn>{children}</MainBtn>;
};

export default MainButton;
