import React from 'react'
import { Outlet } from 'react-router-dom'
import './style.less'
export default function ManageUsersLayout() {
  return (
    <div className='manageUsers-wrapper'>
      <Outlet/>
    </div>
  )
}
