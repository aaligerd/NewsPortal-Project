import React from 'react'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import {Bar} from 'react-chartjs-2';
import '../assets/css/chart.css';

Chart.register(CategoryScale);
function SubscriptionChart({BarData1,BarData2}) {
  return (
    <div className='line-chart'>
        <div className='graph'>
        <Bar data={BarData1} options={{responsive:true,maintainAspectRatio:true}}/>
      </div>
      <div className='graph'>
        <Bar data={BarData2} options={{responsive:true,maintainAspectRatio:true}}/>
      </div>
    </div>
  )
}

export default SubscriptionChart