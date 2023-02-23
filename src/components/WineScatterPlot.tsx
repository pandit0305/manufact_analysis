import Data from '../Wine-Data.json';
import ReactEcharts from "echarts-for-react";

function WineScatterPlot() {
    const new_data: number[][] = [];
      Data.map((ele)=>{
        const el = [Number(ele['Color intensity']), Number(ele['Hue'])]
        return new_data.push(el);
        
      })
   const  option = {
      legend: {},
      xAxis: [
        {
          type: 'value',
          name:"Color Intensity",
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Hue',
          min:0,
          max:10
        }
      ],
      series: [
        {
          name: 'Wine Data',
          type: 'scatter',
          yAxisIndex: 0,
          data: new_data
        }
      ]
    };
  return (
    <div>
      <h2>Scatter Chart</h2>
      <div>
        <ReactEcharts option={option}/>
      </div>
    </div>
  )
}

export default WineScatterPlot
