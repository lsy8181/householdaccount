export const getExpensesFromLocalStorage = () => {
  const data = localStorage.getItem("expenses");
  return data ? JSON.parse(data) : [];
};
