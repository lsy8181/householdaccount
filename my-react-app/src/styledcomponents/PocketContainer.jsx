import React from "react";
import styled from "styled-components";

// 스타일을 적용한 div 생성
const PocketStatusContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top, #6153fd, #958cff); // 예시 그라데이션
  color: white; // 텍스트 색상
`;

const PocketContainer = ({ children }) => {
  return <PocketStatusContainer>{children}</PocketStatusContainer>;
};

export default PocketContainer;
