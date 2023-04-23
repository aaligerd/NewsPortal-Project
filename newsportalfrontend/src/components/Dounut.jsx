import React from 'react'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import {Line,Doughnut} from 'react-chartjs-2';
import '../assets/css/linechart.css';


Chart.register(CategoryScale);

function BarChart({chartData}) {
  
  return (
    <div className='line-chart'>
        <Line data={chartData}/>
    </div>
  )
}

export default BarChart