import React from "react";
import styled from "styled-components";

// 스타일을 적용한 div 생성
const MonthCon = styled.div`
  width: 100%;

  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #252525; // 배경색
  color: white; // 텍스트 색상
`;

const MonthContainer = ({ children }) => {
  return <MonthCon>{children}</MonthCon>;
};

export default MonthContainer;
