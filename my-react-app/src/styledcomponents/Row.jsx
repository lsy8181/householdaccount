import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;

const TextRow = ({ children }) => {
  return <Row>{children}</Row>;
};

export default TextRow;
