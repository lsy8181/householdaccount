//눈으로 볼수있는 금액의 항목에 맞춰 차트 형식으로 디자인된 부분
//차트 하단에는 동그라미로 색상이 있는 항목의 자세한 금액이 위치되는 부분
//차트 라이브러리 사용함... 먼가 모양이 맘에 안드는데 나중에 보고 수정해야할듯?

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useExpenses } from "../utils/ExpensesContext.jsx";

const PocketChart = ({ month }) => {
  const { expenses } = useExpenses();
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "지출 금액",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const filteredExpenses = expenses.filter((expense) => {
      const expenseMonth = new Date(expense.date).getMonth() + 1;
      return expenseMonth === month;
    });

    const labels = filteredExpenses.map((expense) => expense.item);
    const data = filteredExpenses.map((expense) => expense.amount);

    setChartData({
      labels,
      datasets: [
        {
          label: "지출 금액",
          data,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, [expenses, month]); // expenses와 month가 변경될 때마다 useEffect 훅 실행

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default PocketChart;
