import React from "react";
import styled from "styled-components";

// 스타일을 적용한 div 생성
const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;

const TextRow = ({ children }) => {
  return <Row>{children}</Row>;
};

export default TextRow;
