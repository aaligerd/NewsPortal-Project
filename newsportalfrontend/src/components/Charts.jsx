import React from 'react'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import {Line,Bar} from 'react-chartjs-2';
import '../assets/css/chart.css';


Chart.register(CategoryScale);

function Charts({LinechartData,DounutchartData}) {  
  return (
    <div className='line-chart'>
      <div className='graph'>
        <Line data={LinechartData} options={{responsive:true,maintainAspectRatio:true}}/>
      </div>
        <div className='graph'>
          <Bar data={DounutchartData} options={{responsive:true,maintainAspectRatio:true}}/>
        </div>
    </div>
  )
}

export default Charts