// 뉴아이템폼에서 작성된 내용을 해당 부분에서 받아와 블럭 형식으로 표시할 예정
// 내용이 추가 될때마다 하단으로 블럭이 추가 되며
// 아무 내용도 없을때는 "지출 내용을 입력해주세요"라고 나오게 만들예정

import React, { useState } from "react";
import { useExpenses } from "../utils/ExpensesContext";
import Itemontainer from "../styledcomponents/Item";
import Modal from "./Modal";
import styled from "styled-components";

const ExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Amount = styled.p`
  color: red;
  font-weight: bold;
  text-align: right;
`;

const PocketItems = ({ month }) => {
  const { expenses, setExpenses } = useExpenses();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const filteredExpenses = expenses.filter((expense) => {
    const expenseMonth = new Date(expense.date).getMonth() + 1;
    return expenseMonth === month;
  });

  const onEdit = (expense) => {
    setSelectedExpense(expense);
    setIsModalOpen(true);
  };

  const onDelete = (expenseId) => {
    setExpenses(expenses.filter((expense) => expense.id !== expenseId));
  };

  const handleUpdate = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <Itemontainer key={expense.id}>
            <div className="expense-item">
              <p>{expense.date}</p>
              <ExpenseItem>
                <p>
                  {expense.item} - {expense.description}
                </p>
                <Amount> - {expense.amount}</Amount>
              </ExpenseItem>
              <button onClick={() => onEdit(expense)}>수정</button>
              <button onClick={() => onDelete(expense.id)}>삭제</button>
            </div>
          </Itemontainer>
        ))
      ) : (
        <Itemontainer>
          <p>저장된 지출 내역이 없습니다.</p>
        </Itemontainer>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        expense={selectedExpense}
        onUpdate={handleUpdate}
      />
    </>
  );
};

export default PocketItems;
