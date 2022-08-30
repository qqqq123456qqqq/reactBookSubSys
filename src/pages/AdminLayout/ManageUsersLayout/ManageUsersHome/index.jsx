import React from 'react'
import { NavLink } from 'react-router-dom'
import IconToFirstPage from '../../../../components/IconToFirstPage'
import './style.less'
export default function ManageUsersHome() {
  return (
    <div>
      <div className="manageUsersfunc-head">
        <IconToFirstPage />
        <div className='manageUsersfunc-title'><span>用户管理</span></div>
      </div>
      <div className="manageUsersfirst-container">
        <NavLink to='/admin/manageUsers/userInfo'><div className="addBook"><span className='iconfont icon-yonghuguanli'></span> <i>用户信息</i></div></NavLink>
        <NavLink to='/admin/manageUsers/applyList'><div className="delBook"><span className='iconfont icon-shenqing'></span> <i>申请列表</i></div></NavLink>
      </div>
      <div className="manageUserssecond-container">
        <NavLink to='/admin/manageUsers/subLogs'><div className="changeBook"><span className='iconfont icon-caozuoliushuichaxun'></span> <i>订阅流水</i></div></NavLink>
        <NavLink to='/admin/manageUsers'><div className="loading"><span className='iconfont icon-jingqingqidai'></span> <i>敬请期待</i></div></NavLink>
      </div>
    </div>
  )
}
