import React from "react";
import ReactEcharts from "echarts-for-react";

const LineChart = ({ dailyData }) => {
  const renderedData = dailyData.map((a) => a).reverse()
  
  const options = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
  console.log(dailyData)
  return (
    <ReactEcharts
      option={options}
      style={{ width: "100%", height: "60%" }}
    ></ReactEcharts>
  );
};

export default LineChart;
