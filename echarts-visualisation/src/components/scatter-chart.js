import ReactEcharts from "echarts-for-react";
import  React from "react";
import useGetData from "../helpers/get-data"



// prettier-ignore
const hours = [
  '12a', '1a', '2a', '3a', '4a', '5a', '6a',
  '7a', '8a', '9a', '10a', '11a',
  '12p', '1p', '2p', '3p', '4p', '5p',
  '6p', '7p', '8p', '9p', '10p', '11p'
];
// prettier-ignore
const days = [
  'Saturday', 'Friday', 'Thursday',
  'Wednesday', 'Tuesday', 'Monday', 'Sunday'
];

const ScatterChart = () => {

// Taken from https://echarts.apache.org/examples/en/editor.html?c=scatter-punchCard

const style = {
        height: "80vh",
        width: "100%"
    };
    const CLUSTER_COUNT = 6;
    const COLOR_ALL = [
      '#37A2DA',
      '#e06343',
      '#37a354',
      '#b55dba',
      '#b5bd48',
      '#8378EA',
      '#96BFFF'
    ];
    var pieces = [];
    for (var i = 0; i < CLUSTER_COUNT; i++) {
      pieces.push({
        value: i,
        label: 'cluster ' + i,
        color: COLOR_ALL[i]
      });
    }
    const option =  {
      title: {
        text: 'Punch Card of Github'
      },
      legend: {
        data: ['Punch Card'],
        left: 'right'
      },
      tooltip: {
        position: 'top',
        formatter: function (params) {
          return (
            params.value[2] +
            ' commits in ' +
            hours[params.value[0]] +
            ' of ' +
            days[params.value[1]]
          );
        }
      },
      grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
          show: true
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'category',
        data: days,
        axisLine: {
          show: false
        }
      },
      series: [
        {
          name: 'Punch Card',
          type: 'scatter',
          symbolSize: function (val) {
            return val[2] * 2;
          },
          data: useGetData('scatter'),
          animationDelay: function (idx) {
            return idx * 5;
          }
        }
      ]
    };



    return(
  <ReactEcharts option={option} style={style} />
)};

export default ScatterChart;