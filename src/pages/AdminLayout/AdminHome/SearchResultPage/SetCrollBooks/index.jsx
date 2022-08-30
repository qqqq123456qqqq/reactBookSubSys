import React, { useState } from 'react'
import { Checkbox, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import './style.less'
import { reqsetCrollChart } from '../../../../../api/index-ajax';
// import { reqSaveCrollChart } from '../../../../../api/index-ajax';
export default function SetcrollBooks(props) {
  // 这里存储即将传给轮播图的状态
  const [selectBooks, setSelectBooks] = useState();
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
    setSelectBooks(checkedValues);
    console.log(selectBooks);
  };
  const navigate = useNavigate();
  const toRatotionChart = async() => {
    console.log(selectBooks)
    localStorage.setItem("selectBooks",JSON.stringify(selectBooks));
    // 在这里将轮播图数据进行一次存档至数据库，
    try {
      let bookNames =  [];
      for (let i =0;i<selectBooks.length;i++){
        bookNames.push({bookName:selectBooks[i].bookName,author:selectBooks[i].author,id:selectBooks[i].id})
      }
      const response = await reqsetCrollChart({data:bookNames});
      console.log(response);
      navigate('/admin',{repalce:false})
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className='booksContainer'>
        <div className='title'>
          <div className='select'><span>选项</span></div>
          <div className='bookName'><span>书名</span></div>
          <div className='author'><span>作者</span></div>
          <div className='publisher'><span>出版社</span></div>
        </div>
        <div className="booksCheckbox">
          <Checkbox.Group style={{ width: '100%', }} onChange={onChange} >
            {
              props.state.length !== 0 ? props.state.map((bookObj) => {
                return (
                  <Row className='row' key={bookObj.id}>
                    <Col span={50}>
                      <Checkbox value={bookObj}>
                        <div className='bookInfo'>
                          <div className='bookName'><span>{bookObj.bookName}</span></div>
                          <div className='bookAuthor'><span>{bookObj.author}</span></div>
                          <div className='bookPublisher'><span>{bookObj.publisher}</span></div>
                        </div>
                      </Checkbox>
                    </Col>
                  </Row>
                )
              }) : <div>暂无书籍可供选择，请搜索书籍</div>
            }
          </Checkbox.Group>

        </div>

      </div>
      <div className="submitToRatotionChart">
        <button onClick={() => toRatotionChart()}>提交至轮播图</button>
      </div>
    </div>

  )
}
