// App.jsx
import React from "react";
import { ExpensesProvider } from "./ExpensesContext";
import PocketStatus from "./pocketContainer/PocketStatus"; // PocketStatus 컴포넌트를 import
import NewItemForm from "./newitemContainer/NewItemForm";

const App = () => {
  return (
    <ExpensesProvider>
      <NewItemForm />
      <PocketStatus />
    </ExpensesProvider>
  );
};

export default App;
