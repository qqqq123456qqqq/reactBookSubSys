import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Input } from 'antd';
import './style.less'
import IconToFirstPage from '../../../components/IconToFirstPage';
import { requsersearchBook } from '../../../api/index-ajax';
const { Search } = Input;
export default function UserHome() {
  const navigate = useNavigate();
  const onSearch = async (value) => {
    console.log(value);
    //  这里先向服务器发送数据，拿到数据后，传到书籍展示页面
    try {
      const response = await requsersearchBook({ value: value });
      console.log(response)
      if (response.data.status === 1) navigate('/user/searchResult', { replace: true, state: response.data.data })
      else console.log(response.data.msg)
    } catch (error) {
      console.log("请求失败", error)
    }
  }
  return (
    <div>
      <div className="useHomeHead">
        <IconToFirstPage />
        <div className='search-wrapper'>
          <div className="search">
            <Search
              placeholder="请输入作者或者书名，点击搜索"
              onSearch={onSearch}
              style={{
                width: 250,
              }}
            />
          </div>
        </div>
      </div>
      <div className="body">
        <Outlet />
      </div>
    </div>
  )
}
