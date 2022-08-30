import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'
export default function IconToFirstPage() {
    let current = JSON.parse(localStorage.getItem('userInfo'));
    return (
        <NavLink to={'/'+current.identify}>
            <div className='icon'>
                <span className='iconfont icon-tushuguan'>
                </span>
            </div>
        </NavLink>
    )
}
