import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'
export default function BookList() {
  return (
    <div className='booklist'>
        <NavLink to='/bookInfo'>bookTest</NavLink>
    </div>
  )
}
