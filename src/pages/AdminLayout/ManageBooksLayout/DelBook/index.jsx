import React, {  useState } from 'react'
import IconToFirstPage from '../../../../components/IconToFirstPage'
import { Button } from 'antd'
import './style.less'
import { reqDelBook } from '../../../../api/index-ajax';
// import { useNavigate } from 'react-router-dom';
export default function DelBook() {
  // 但如果上服务器多人使用，这里的日志消息变更应该和删除信息分离开来，且每5分钟自动从数据获取数据，渲染一次
  const [delBookLogs,setdelBookLogs] = useState([]);
  const toDelBook = async () => {
    let author = document.getElementsByClassName('delTitle')[0];
    let bookName = document.getElementsByClassName('delbookName')[0];
    console.log(author.value, bookName.value)
    try {
      const response = await reqDelBook({
        author: author.value,
        bookName: bookName.value,
        username: JSON.parse(localStorage.getItem('userInfo')).username,
      });
      console.log(response);
      if (response.data.status === 1) {
        setdelBookLogs(response.data.delBookLogs)
        localStorage.setItem("delBookLogs",JSON.stringify(response.data.delBookLogs))
      }
    } catch (error) {
      console.log("请求失败", error)
    }
  };
  console.log(delBookLogs)
  return (
    <div className='delBookWrapper'>
      <div className="delBookHead">
        <IconToFirstPage />
        <div className="delBookTitle"><span>删除书籍</span></div>
      </div>
      <div className="delBookBody">
        <div className="bookInfo">
          <div className="author">
            <div className="title"><span >作者：</span></div>
            <div className="text"><input className='delTitle' type="text" /></div>
          </div>
          <div className="bookName">
            <div className="title"><span>书名：</span></div>
            <div className="text"><input className='delbookName' type="text" /></div>
          </div>
        </div>
        <div className='deleteBookBtn'>
          <Button type="primary" htmlType="submit" onClick={() => toDelBook()}>删除<br />书籍</Button>
        </div>
      </div>
      <div className="delBookLog">
        <div className="delLogsTitle"><span>删除记录</span></div>
        <div className='delBookLogs-wrapper'>
          <div className="title">
            <div className="optionPerson"><span>执行人</span></div>
            <div className="bookName"><span>书名</span></div>
            <div className="author"><span>作者</span></div>
            <div className="date"><span>执行删除时间</span></div>
          </div>
          {
            delBookLogs.length!==0 ? delBookLogs.map((delLogObj) => {
              return (
                <div className="oneLog" key={delLogObj.date}>
                  <div className="optionPerson"><span>{delLogObj.admin}</span></div>
                  <div className="bookName"><span>{delLogObj.bookName}</span></div>
                  <div className="author"><span>{delLogObj.author}</span></div>
                  <div className="date"><span>{delLogObj.date}</span></div>
                </div>
              )
            })
            :localStorage.getItem('delBookLogs') !== null ? JSON.parse(localStorage.getItem('delBookLogs')).map((delLogObj) => {
              return (
                <div className="oneLog" key={delLogObj.date}>
                  <div className="optionPerson"><span>{delLogObj.admin}</span></div>
                  <div className="bookName"><span>{delLogObj.bookName}</span></div>
                  <div className="author"><span>{delLogObj.author}</span></div>
                  <div className="date"><span>{delLogObj.date}</span></div>
                </div>
              )
            }) : <div>暂无数据</div>
          }
        </div>
      </div>
    </div>
  )
}
