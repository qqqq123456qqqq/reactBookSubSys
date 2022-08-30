import React from 'react'
import IconToFirstPage from '../../../components/IconToFirstPage'
import '../../../assets/iconfont.css'
import './style.less'
import { useNavigate, Outlet } from 'react-router-dom';
import { reqSearchBook } from '../../../api/index-ajax';
import { Input } from 'antd';
const { Search } = Input;
export default function AdminHome() {
  const navigate = useNavigate();
  const onSearch =async (value) => {
    console.log(value);
    //  这里先向服务器发送数据，拿到数据后，传到书籍展示页面
    try {
      const response =await reqSearchBook({value:value});
      if(response.data.status===1) navigate('/admin/searchResultPage',{replace:true,state:response.data.data})
      else console.log(response.data.msg)
    } catch (error) {
      console.log("请求失败",error)
    }
  }
  return (
    <div>
      <div className="head">
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
        <div className="body">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
