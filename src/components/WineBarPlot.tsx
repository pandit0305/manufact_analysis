import Data from '../Wine-Data.json';
import ReactEcharts from "echarts-for-react";

function WineBarPlot() {
    const alcohol_data: number[] = [];
    const malic_acid_data: number[]=[];
      Data.map((ele)=>{
        alcohol_data.push(Number(ele['Alcohol']));
        malic_acid_data.push(Number(ele['Malic Acid']));
        
      })
      const sum_malic_data = malic_acid_data.reduce((i, cb)=>{
        return cb+i
      })
      const average_malic_data = Math.floor(sum_malic_data/malic_acid_data.length);
      console.log(average_malic_data);
      
   const  option = {
      legend: {},
      xAxis: [
        {
          type: 'category',
          name:"Alcohol",
          min:1,
          max:Math.max(...alcohol_data)
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Malic Acid',
        }
      ],
      series: [
        {
          name: 'Wine Data',
          type: 'bar',
          data: malic_acid_data
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