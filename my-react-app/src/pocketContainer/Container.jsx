// 전채적인 상단 부분과 포켓 아이템이 위치하는 부분이 될 예정

import React from "react";
import PocketStatus from "./pocketContainer/PocketStatus"; // PocketStatus 컴포넌트를 import

const pocketContainer = () => {
  return (
    <div>
      <PocketStatus /> {}
    </div>
  );
};

export default pocketContainer;
