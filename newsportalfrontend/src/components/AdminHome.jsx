import React,{useState} from 'react';
import '../assets/css/adminpanelmainbody.css';
import StatCard from './StatCard';
import Charts from './Charts';
import SubscriptionChart from './SubscriptionChart';
import {Data} from '../assets/demo/Data';
import {Devicedata} from '../assets/demo/Devicedata';
import {SubscriberGain} from '../assets/demo/SubscribGain';
import {SubscriberLoss} from '../assets/demo/SubscriberLoss';
import Footer from '../components/Footer';

function AdminHome() {
  const [dailyData, setDailyData] = useState({
    labels:Data.map((ele)=>{const l=ele.month+" "+ele.day;return l;}),
    datasets:[{
      label:"Daily Views",
      data:Data.map((ele)=>ele.view),
      backgroundColor:[" #d35400 "," #e67e22","#3498db"],
      borderColor:["#ec7063"],
      tension: 0.4
    }]
  });
  const [deviceData, setDeviceData] = useState({
    labels:Devicedata.map((ele)=>ele.device),
    datasets:[{
      label:"Devices",
      data:Devicedata.map((ele)=>ele.views),
      backgroundColor:[" #d35400 "," #e67e22","#3498db"]
    }]
  });
  const [subGain, setSubGain] = useState({
    labels:SubscriberGain.map((ele)=>{const l=ele.month+" "+ele.day;return l;}),
    datasets:[{
      label:"Subscriber Gain",
      data:SubscriberGain.map((ele)=>ele.gain),
      backgroundColor:["#d2b4de "," #e67e22","#3498db"]
    }]
  })
  const [subLoss, setSubLoss] = useState({
    labels:SubscriberLoss.map((ele)=>{const l=ele.month+" "+ele.day;return l;}),
    datasets:[{
      label:"Subscriber Loss",
      data:SubscriberLoss.map((ele)=>ele.gain),
      backgroundColor:[" #5dade2 "," #f1c40f ", "#eb984e"," #58d68d "]
    }]
  })
  return (
    <div className="home-container" >
        <div className="hot-stats">
            <StatCard title="Total Post" number="500" details="This is the total number of post published by us" color="1"/>
            <StatCard title="Total Views" number="51324" details="This is the total number of views we get" color="2"/>
            <StatCard title="Most View" number="2426" details="This is the maimum number of view we get in a single post" color="3"/>
        </div>
        <div className='chart-box'>
          <Charts LinechartData={dailyData} DounutchartData={deviceData} />
        </div>
        <div className='chart-box'>
          <SubscriptionChart BarData1={subGain} BarData2={subLoss} />
        </div>
        
        <div className="footer">
          <Footer/>
          </div>     
        
    </div>
  )
}

export default AdminHome;