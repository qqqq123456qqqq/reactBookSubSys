import React, { useState } from 'react'
import { Carousel } from 'antd';
import '../../../../assets/iconfont.css'
import './style.less'
import HomeBooks from '../../../AdminLayout/AdminHome/Adminbody/HomeBooks'
import { reqgetcrollChartData } from '../../../../api/index-ajax';
export default function UserHomeBody() {
  const [crollChart,setcrollChart] = useState([]);
  let current = localStorage.getItem('crollChart');
  if(current===null) current=[];
  else current = JSON.parse(localStorage.getItem('crollChart'));
  const contentStyle = {
    height: '160px',
    width: '300px',
    color: '#fff',
    margin: '0 auto',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const getcrollChartData = async()=>{
    const response = await reqgetcrollChartData({});
    console.log(response)
    setcrollChart(response.data.data);
    localStorage.setItem('crollChart',JSON.stringify(response.data.data))
  }
  return (
    <div>
      <div className="crollChartWrapper">
        <div className="crollBooks">
          <Carousel autoplay>
            {
              crollChart.length !== 0 ? crollChart.map((imgObj) => {
                return (
                  <div key={imgObj.id}>
                    <img style={contentStyle} src={imgObj.bookImg} alt="加载失败或未设置轮播图书籍" />
                  </div>
                )
              }) :current.length!==0 ?
              current.map((imgObj) => {
                return (
                  <div key={imgObj.id}>
                    <img style={contentStyle} src={imgObj.bookImg} alt="加载失败或未设置轮播图书籍" />
                  </div>
                )
              }) : <div>暂无数据</div>
            }
          </Carousel>
        </div>
        <div className='getcrollChartData'>
          <span onClick={()=>getcrollChartData()} className='iconfont icon-shuaxin'></span>
        </div>

      </div>
      <div className="bookList">
        <HomeBooks state={current} />
      </div>
    </div>
  )
}
