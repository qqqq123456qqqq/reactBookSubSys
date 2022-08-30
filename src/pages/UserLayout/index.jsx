import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../assets/iconfont.css'
import './style.less'

export default function UserLayout() {
  return (
    <div className='userwrapper'>
      <div className="head-body">
        <Outlet/>
      </div>
      <div className="footer">
        <NavLink to='/user/subApplyList'><div className="bookCar"><span className='iconfont icon-gouwuchekong'></span> <i>书籍小车</i></div></NavLink>
        <NavLink to='/user/selfInfo'><div className="selfInfo"><span className='iconfont icon-wodexinxi'></span> <i>个人信息管理</i></div></NavLink>
      </div>
    </div>
  )
}
