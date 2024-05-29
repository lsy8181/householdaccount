import React from "react";

const PocketMonth = ({ month, setMonth }) => {
  // 이전 월로 이동
  const handlePrevMonth = () => {
    setMonth((month) => (month > 1 ? month - 1 : 12));
  };

  // 다음 월로 이동
  const handleNextMonth = () => {
    setMonth((month) => (month < 12 ? month + 1 : 1));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={handlePrevMonth}>&lt;</button>
      <span style={{ margin: "0 20px" }}>{month}월</span>
      <button onClick={handleNextMonth}>&gt;</button>
    </div>
  );
};

export default PocketMonth;
