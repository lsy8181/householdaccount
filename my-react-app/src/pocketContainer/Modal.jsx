import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
`;

const Modal = ({ isOpen, onClose, expense, onUpdate }) => {
  const [editExpense, setEditExpense] = useState(expense);

  useEffect(() => {
    setEditExpense(expense);
  }, [expense]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editExpense);
    onClose();
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalView onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="date"
            value={editExpense.date || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="item"
            value={editExpense.item || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={editExpense.description || ""}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            value={editExpense.amount || ""}
            onChange={handleChange}
          />
          <button type="submit">수정하기</button>
        </form>
        <button onClick={onClose}>취소</button>
      </ModalView>
    </ModalBackdrop>
  );
};

export default Modal;
