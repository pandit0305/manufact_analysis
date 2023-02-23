import Data from '../Wine-Data.json';
import ReactEcharts from "echarts-for-react";

function WineBarPlot() {
    const new_data: number[] = [];
      Data.map((ele)=>{
        const el = Number(ele['Alcohol'])
        return new_data.push(el);
        
      })
   const  option = {
      legend: {},
      xAxis: [
        {
          type: 'category',
          name:"Alcohol",
          min:0,
          max:Math.max(...new_data)
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Malic Acid',
          min:0,
          max:Math.max(...new_data)
        }
      ],
      series: [
        {
          name: 'Wine Data',
          type: 'bar',
          yAxisIndex: 0,
          data: new_data
        }
      ]
    };
  return (
    <div>
      <h2>
      Bar Chart
      </h2>
      <div>
        <ReactEcharts option={option}/>
      </div>
    </div>
  )
}
export default WineBarPlot