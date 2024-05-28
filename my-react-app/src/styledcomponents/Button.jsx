// Button.js
import styled from "styled-components";

// Button 스타일 컴포넌트 생성
const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background: darkviolet;
  }
`;

export default Button;
