import React from 'react'
import './style.less'
import '../../../assets/iconfont.css'
import { Outlet } from 'react-router-dom'

export default function ManageBooksLayout() {
  return (
    <div className='func-container'>
      <Outlet/>
    </div>
  )
}
