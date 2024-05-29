// 새로운 지출을 추가하게 될때 내용들을 넣는 부분
// 폼형식으로 받아 올꺼고
// 받아오는 내용은 날짜, 지출 항목, 금액, 내용을 적을 수 있어야하고
// 밑에는 저장 버튼이 있어야해
// 받아온 내용은 로컬 호스트에 저장되어야해.
import React, { useState } from "react";
import { useExpenses } from "../utils/ExpensesContext";
import FormContainer from "../styledcomponents/FormContainer";
import Row from "../styledcomponents/Row";
import SaveBtn from "../styledcomponents/SaveBtn";
import FormStyle from "../styledcomponents/StyledForm";

const NewItemForm = () => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const { addExpense } = useExpenses();

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = { date, item, amount, description };

    addExpense(expenseData);

    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Row>
          <div>
            <label>날짜:</label>
            <FormStyle
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label>지출 항목:</label>
            <FormStyle
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <div>
            <label>금액:</label>
            <FormStyle
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label>내용:</label>
            <FormStyle
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </Row>
        <SaveBtn type="submit">저장</SaveBtn>
      </form>
    </FormContainer>
  );
};

export default NewItemForm;
