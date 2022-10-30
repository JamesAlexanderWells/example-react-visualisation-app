import  React from "react";
import ReactEcharts from "echarts-for-react";
import useGetData from "../helpers/get-data"

 const PieChart = () => {
    // Taken from https://echarts.apache.org/examples/en/editor.html?c=pie-roseType-simple
    const style = {
        height: "80vh",
        width: "100%"
    };
    const data = useGetData("pie")
    let option = {
        backgroundColour: ' #002933',
      
        legend: {
            top: 'bottom'
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [50, 250],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data
            }
          ]
      };
    return(
  <ReactEcharts option={option} style={style} className="pie-chart" />
)};

export default PieChart;