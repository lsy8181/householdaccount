import React, { useState, useEffect } from "react";
import { useExpenses } from "../utils/ExpensesContext";

const PocketStatus = ({ month }) => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const { expenses } = useExpenses();

  useEffect(() => {
    const total = expenses.reduce((acc, expense) => {
      const expenseDate = new Date(expense.date);
      if (expenseDate.getMonth() + 1 === month) {
        return acc + parseFloat(expense.amount);
      }
      return acc;
    }, 0);

    setTotalExpenses(total); // 총 지출 금액 설정
  }, [expenses, month]); // 의존성 배열에 month 추가

  return (
    <div>
      <h2>{month}월 총 지출</h2>
      <h2>{totalExpenses.toLocaleString()}원</h2>
    </div>
  );
};

export default PocketStatus;
