import ReactEcharts from "echarts-for-react";
import  React from "react";
import useGetData from "../helpers/get-data"





const BarChart = () => {

// Taken from https://echarts.apache.org/examples/en/editor.html?c=bar-stack
const style = {
        height: "80vh",
        width: "100%"
    };
const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: useGetData('bar')
      };



    return(
  <ReactEcharts option={option} style={style} className="pie-chart" />
)};

export default BarChart;