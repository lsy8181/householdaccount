// 새로운 지출을 추가하게 될때 내용들을 넣는 부분
// 폼형식으로 받아 올꺼고
// 받아오는 내용은 날짜, 지출 항목, 금액, 내용을 적을 수 있어야하고
// 밑에는 저장 버튼이 있어야해
// 받아온 내용은 로컬 호스트에 저장되어야해.

import React, { useState } from "react";
import { useExpenses } from "../ExpensesContext";

const NewItemForm = () => {
  // 상태 관리를 위한 useState 훅 사용
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const { addExpense } = useExpenses();

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = { date, item, amount, description };

    // Context를 통해 지출 항목 추가
    addExpense(expenseData);

    // 로컬 스토리지에 데이터 저장
    // 'expenses' 키에 데이터 배열로 저장, 기존 데이터가 있으면 추가
    const existingExpenses = localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : [];
    existingExpenses.push(expenseData);
    localStorage.setItem("expenses", JSON.stringify(existingExpenses));

    // 폼 초기화
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>날짜:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>지출 항목:</label>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div>
        <label>금액:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>내용:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">저장</button>
    </form>
  );
};

export default NewItemForm;
