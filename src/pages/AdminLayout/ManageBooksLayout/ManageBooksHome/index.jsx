import React from 'react'
import { NavLink } from 'react-router-dom'
import IconToFirstPage from '../../../../components/IconToFirstPage'
import './style.less'
export default function ManageBooksHome() {
    return (
        <div>
            <div className="func-head">
                <IconToFirstPage />
                <div className='func-title'><span>书籍管理</span></div>
            </div>
            <div className="first-container">
                <NavLink to='/admin/manageBooks/addBook'><div className="addBook"><span className='iconfont icon-tianjia'></span> <i>增加书籍</i></div></NavLink>
                <NavLink to='/admin/manageBooks/delBook'><div className="delBook"><span className='iconfont icon-shanchu'></span> <i>删除书籍</i></div></NavLink>
            </div>
            <div className="second-container">
                <NavLink to='/admin/manageBooks/changeBook'><div className="changeBook"><span className='iconfont icon-genggai-01'></span> <i>修改书籍</i></div></NavLink>
                <NavLink to='/admin/manageBooks'><div className="loading"><span className='iconfont icon-jingqingqidai'></span> <i>敬请期待</i></div></NavLink>
            </div>
        </div>
    )
}
