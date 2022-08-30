import React from 'react'
import './style.less'
import '../../assets/iconfont.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home'>
      <div className="home-header">
        <span>图书订阅管理系统</span>
      </div>
      <div className="home-container">  
        <div className="register-logon">
          <NavLink to='/register'>
            <div className="register">
              <div className="headImg"><span className='iconfont icon-zhuce'></span></div>
              <div className="imgName"><span>注册</span></div>
            </div>
          </NavLink>
          <NavLink to='/login'>
            <div className="login" >
            <div className="headImg"><span className='iconfont icon-denglu'></span></div>
            <div className="imgName"><span>登录</span></div>
          </div>
          </NavLink>
        </div>
        <div className='userInfo'>
          <Outlet />
        </div>
      </div>
      <div className="home-footer">
        <span>图书订阅管理系统V1.0</span>
      </div>
    </div>
  )
}
