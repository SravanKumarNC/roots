import React from "react";
import ReactEcharts from "echarts-for-react";

const LineChart = ({ dailyData }) => {
  const renderedData = dailyData.map((a) => a / 2).reverse();
  const currentDay = new Date().getDay();
  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const XLabels = [];
  for (let i = 0; i < 7; i++) {
    XLabels.push(daysInWeek[(currentDay - i + 7) % 7]);
  }
  const data = XLabels.reverse()
  const options = {
    xAxis: {
      type: "category",
      data: data,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: renderedData,
        type: "line",
      },
    ],
  };
  console.log(dailyData);
  return (
    <ReactEcharts
      option={options}
      style={{ width: "100%", height: "60%" }}
    ></ReactEcharts>
  );
};

export default LineChart;
