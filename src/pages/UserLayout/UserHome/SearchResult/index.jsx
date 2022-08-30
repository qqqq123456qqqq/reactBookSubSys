import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './style.less'
import { Checkbox, Col, Row, Button, Form, DatePicker } from 'antd';
import { reqApplySub } from '../../../../api/index-ajax';
export default function SearchResult() {
  // const navigate = useNavigate();
  // 保存服务器传来的书籍
  const [bookInfo, setbookInfo] = useState([]);
  // 创建状态保存时间
  const [sDate, setstartDate] = useState();
  const [eDate, setendDate] = useState();
  // 创建状态保存要进行订阅的书籍
  const [selectBooks, setselectBooks] = useState();
  // 这里要处理服务器返回的数据,保存在bookList状态里
  const location = useLocation();
  useEffect(() => {
    if (location.state === null) return;
    else {
      setbookInfo(location.state);
      console.log("将服务器数据保存到bookList")
    }
  }, [location.state])
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
    setselectBooks(checkedValues);
  };
  const endDate = (value, dateString) => {
    // console.log('Selected Time: ', value);
    console.log('Formatted 结束 Time: ', dateString);
    setendDate(dateString)
  };
  const startDate = (value, dateString) => {
    // console.log('Selected Time: ', value);
    console.log('Formatted 开始 Time: ', dateString);
    setstartDate(dateString)
  };
  const toAddSub = async () => {
    if (selectBooks !== undefined && eDate !== undefined && sDate !== undefined) {
      let values = []
      let date = new Date();
      for (let i = 0; i < selectBooks.length; i++) {
        values.push({
          applyPerson: JSON.parse(localStorage.getItem('userInfo')).username,
          applyBook: selectBooks[i].bookName,
          applyBookTime: date.toLocaleDateString(),
          subStartTime: sDate,
          subEndTime: eDate
        });
        console.log(values);
        try {
          const response =await reqApplySub({
            value: values
          });
          console.log(response)
          // alert(response.data.msg)
        } catch (error) {
          console.log("请求错误", error)
        }
      }
    }
    else alert('请选择书籍、开始时间、结束时间')
  }
  return (
    <div>
      <div className="bookInfoWrapper">
        <div className="bookInfoData">
          <Checkbox.Group style={{ width: '100%', }} onChange={onChange} >
            {
              bookInfo.length !== 0 ? bookInfo.map((bookInfoObj) => {
                return (
                  <Row className='row' key={bookInfoObj._id}>
                    <Col span={50}>
                      <Checkbox value={bookInfoObj}>
                        <div className='onedata'>
                          <div className="bookName">
                            <div className="title"><span>书名</span></div>
                            <div className="data"><span>{bookInfoObj.bookName}</span></div>
                          </div>
                          <div className="author">
                            <div className="title"><span>作者</span></div>
                            <div className="data"><span>{bookInfoObj.author}</span></div>
                          </div>
                          <div className="publisher">
                            <div className="title"><span>出版商</span></div>
                            <div className="data"><span>{bookInfoObj.publisher}</span></div>
                          </div>
                          <div className="bookNum">
                            <div className="title"><span>书籍数量</span></div>
                            <div className="data"><span>{bookInfoObj.bookNum}</span></div>
                          </div>
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
      <div className="selectData">
        <Form.Item label="订阅开始时间" className='startDate'>
          <DatePicker onChange={startDate} />
        </Form.Item>
        <Form.Item label="订阅结束时间" className='endDate'>
          <DatePicker onChange={endDate} />
        </Form.Item>
      </div>
      <div className="submit">
        <Button type="primary" htmlType="submit" onClick={() => toAddSub()}>点击提交订阅申请</Button>
      </div>
    </div>
  )
}
