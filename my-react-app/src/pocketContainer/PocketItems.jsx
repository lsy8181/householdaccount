// 뉴아이템폼에서 작성된 내용을 해당 부분에서 받아와 블럭 형식으로 표시할 예정
// 내용이 추가 될때마다 하단으로 블럭이 추가 되며
// 아무 내용도 없을때는 "지출 내용을 입력해주세요"라고 나오게 만들예정

import React from "react";
import { useExpenses } from "../utils/ExpensesContext";

const PocketItems = ({ month }) => {
  const { expenses } = useExpenses();

  const filteredExpenses = expenses.filter((expense) => {
    const expenseMonth = new Date(expense.date).getMonth() + 1;
    return expenseMonth === month;
  });

  return (
    <div className="pocket-items-container">
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense, index) => (
          <div key={index} className="expense-item">
            <p>날짜: {expense.date}</p>
            <p>지출 항목: {expense.item}</p>
            <p>금액: {expense.amount}</p>
            <p>내용: {expense.description}</p>
          </div>
        ))
      ) : (
        <p>저장된 지출 내역이 없습니다.</p>
      )}
    </div>
  );
};

export default PocketItems;
