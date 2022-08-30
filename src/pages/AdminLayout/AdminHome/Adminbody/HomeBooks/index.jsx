import React from 'react'
import './style.less'
export default function HomeBooks(props) {
  return (
    <div className='bookList'>
      <div className='title'>
        <div className='bookImg'><span>封面</span></div>
        <div className='bookName'><span>书名</span></div>
        <div className='author'><span>作者</span></div>
        <div className='publisher'><span>出版社</span></div>
      </div>
      {
       props.state !== null ? props.state.map((bookObj) => {
          return (
            <div key={bookObj.id} className='bookInfo'>
              <div className='bookImg'><img src={bookObj.bookImg} alt="图片加载失败" /></div>
              <div className="bookName"><span>{bookObj.bookName}</span></div>
              <div className="author"><span>{bookObj.author}</span></div>
              <div className="publisher"><span>{bookObj.publisher}</span></div>
            </div>
          )
        }) : <div>暂无数据</div>
      }
    </div>
  )
}
