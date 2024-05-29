import React from "react";
import styled from "styled-components";

const PocketStatusContainer = styled.div`
  width: 100%;
  top: 0; /* 상단에 위치 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top, #6153fd, #958cff); // 예시 그라데이션
  color: white;
`;

const PocketContainer = ({ children }) => {
  return <PocketStatusContainer>{children}</PocketStatusContainer>;
};

export default PocketContainer;
