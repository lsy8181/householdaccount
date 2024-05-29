import React, { useState } from "react";
import { ExpensesProvider } from "./utils/ExpensesContext";
import PocketStatus from "./pocketContainer/PocketStatus";
import NewItemForm from "./newitemContainer/NewItemForm";
import PocketItems from "./pocketContainer/PocketItems";
import PocketChart from "./pocketContainer/PocketChart";
import PocketMonth from "./pocketContainer/PocketMonth";
import PocketContainer from "./styledcomponents/PocketContainer";
import MonthContainer from "./styledcomponents/MonthContainer";
import styled from "styled-components";

const App = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const AppContainer = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-left: 20px;
    background-color: #ffffff;
  `;
  return (
    <AppContainer>
      <ExpensesProvider>
        <MonthContainer>
          <PocketMonth month={month} setMonth={setMonth} />
        </MonthContainer>
        <PocketContainer>
          <PocketStatus month={month} />
          <PocketChart month={month} />
          <NewItemForm />
        </PocketContainer>
        <PocketItems month={month} />
      </ExpensesProvider>
    </AppContainer>
  );
};

export default App;
