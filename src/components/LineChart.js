import React from "react";
import ReactEcharts from "echarts-for-react";

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
      data: [150, 230, 224, 288, 135, 60, 75],
      type: "line",
    },
  ],
};

const LineChart = () => {
  return <ReactEcharts option={options} style={{width:"100%", height:"60%"}}></ReactEcharts>;
};

export default LineChart;
