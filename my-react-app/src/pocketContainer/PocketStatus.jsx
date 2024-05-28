// 현재 저장된 금액과 추후에 추가되는 금액에 맞춰서 바뀌는 부분
// 최상단에는 oo월 총 지출 그 하단에는 금액부분이 나오는 부분

import React, { useState, useEffect } from "react";
import { useExpenses } from "../ExpensesContext.jsx";

const PocketStatus = () => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [month, setMonth] = useState("");
  const { expenses } = useExpenses();

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    setMonth(currentMonth);

    // 현재 월에 해당하는 지출만 합산
    const total = expenses.reduce((acc, expense) => {
      const expenseDate = new Date(expense.date);
      if (expenseDate.getMonth() + 1 === currentMonth) {
        return acc + parseFloat(expense.amount);
      }
      return acc;
    }, 0);

    setTotalExpenses(total); // 총 지출 금액 설정
  }, [expenses]);

  return (
    <div>
      <h2>{month}월 총 지출</h2>
      <p>{totalExpenses.toLocaleString()}원</p>{" "}
    </div>
  );
};

export default PocketStatus;
