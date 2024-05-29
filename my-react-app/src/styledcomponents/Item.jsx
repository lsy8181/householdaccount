import React from "react";
import styled from "styled-components";

const NewItems = styled.div`
  margin-top: 25px;
  margin-right: 10px;
  margin-left: 10px;
  width: 500px;
  background-color: #ffffff; // 배경색
  border-radius: 12px; // 둥근 모서리
  padding: 20px; // 내부 여백
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Itemontainer = ({ children }) => {
  return <NewItems>{children}</NewItems>;
};

export default Itemontainer;
