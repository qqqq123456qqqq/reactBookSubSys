import React from 'react'
import './style.less'
import '../../assets/iconfont.css'
import { NavLink, Outlet } from 'react-router-dom'
export default function AdminLayout() {
  return (
    <div className='admin-container'>
      <Outlet/>
      <div className="footer">
        <NavLink to='/admin/manageBooks'><div className="bookShelf"><span className='iconfont icon-shujia'></span><i>书籍管理</i></div></NavLink>
        <NavLink to='/admin/manageUsers'><div className="userManage"><span className='iconfont icon-yonghuguanli'></span><i>用户管理</i></div></NavLink>
        <NavLink to='/admin/selfInfo'><div className="selfInfo"><span className='iconfont icon-wodexinxi'></span><i>个人信息</i></div></NavLink>
      </div>
    </div>
  )
}
