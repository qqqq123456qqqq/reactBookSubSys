import React, { useState } from 'react'
import IconToFirstPage from '../../../components/IconToFirstPage'
import './style.less'
import { Checkbox, Col, Row, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { reqDeleteSub, reqGetSubApplyList } from '../../../api/index-ajax';
export default function SubBook() {
  // 创建状态
  const [subList, setsubList] = useState([]);
  const [deleteSub,setDeleteSub] = useState();
  // let current = localStorage.getItem("subList");
  // console.log();
  // if(current===null) current=[];
  // else current = JSON.parse(current)
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
    setDeleteSub(checkedValues);
    // console.log(selectBooks);
  };
  const toShift = async()=>{
    try {
      const response = await reqGetSubApplyList({applyPerson:JSON.parse(localStorage.getItem('userInfo')).username});
      console.log(response);
      if(response.data.status===1) {
        setsubList(response.data.data);
        alert(response.data.msg)
        // localStorage.setItem('subList',JSON.stringify(response.data.data))
      }else{
        alert(response.data.msg)
        setsubList(response.data.data);
        // localStorage.setItem('subList',JSON.stringify(response.data.data))
      }
    } catch (error) {
      console.log("请求失败",error)
    }
  }
  
  const todelSub = async()=>{
    try{
      const response = await reqDeleteSub({values:deleteSub});
      alert(response.data.msg);
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='subBookWrapper'>
      <div className="subBookheader">
        <IconToFirstPage />
        <div className='subBook-title'><span>书籍订阅列表</span></div>
        <NavLink to='/user/searchResult'><div className="lastPage"><span>去订阅</span></div></NavLink>
      </div>
      <div className="subListWrapper">
        <div className='subListContainer'>
          <div className="subListBodyTitle">
            <div className="applyPerson"><span>申请人</span></div>
            <div className="applyBook"><span>书籍</span></div>
            <div className="applyBookTime"><span>申请时间</span></div>
            <div className="subStartTime"><span>订阅开始</span></div>
            <div className="subEndTime"><span>订阅结束</span></div>
            <div className="subStatus"><span>状态</span></div>
          </div>
          <div className="booksCheckbox">
            <Checkbox.Group style={{ width: '100%', }} onChange={onChange} >
              {  subList.length !== 0 ? subList.map((bookObj) => {
                  return (
                    <Row className='row' key={bookObj._id}>
                      <Col span={50}>
                        <Checkbox value={bookObj}>
                          <div className="applyListData">
                            <div className="applyPerson"><span>{bookObj.applyPerson}</span></div>
                            <div className="applyBook"><span>{bookObj.applyBook}</span></div>
                            <div className="applyBookTime"><span>{bookObj.applyBookTime}</span></div>
                            <div className="subStartTime"><span>{bookObj.subStartTime}</span></div>
                            <div className="subEndTime"><span>{bookObj.subEndTime}</span></div>
                            <div className="subStatus"><span>{bookObj.subStatus}</span></div>
                          </div>
                        </Checkbox>
                      </Col>
                    </Row>
                  )
                })
                // :
                // current.length !== 0 ? current.map((bookObj) => {
                //   return (
                //     <Row className='row' key={bookObj._id}>
                //       <Col span={50}>
                //         <Checkbox value={bookObj}>
                //           <div className="applyListData">
                //             <div className="applyPerson"><span>{bookObj.applyPerson}</span></div>
                //             <div className="applyBook"><span>{bookObj.applyBook}</span></div>
                //             <div className="applyBookTime"><span>{bookObj.applyBookTime}</span></div>
                //             <div className="subStartTime"><span>{bookObj.subStartTime}</span></div>
                //             <div className="subEndTime"><span>{bookObj.subEndTime}</span></div>
                //             <div className="subStatus"><span>{bookObj.subStatus}</span></div>
                //           </div>
                //         </Checkbox>
                //       </Col>
                //     </Row>
                //   )
                // }) 
                : 
                <div>暂无书籍可供选择，请搜索书籍</div>
              }
            </Checkbox.Group>
          </div>
        </div>
      </div>
      <div className="subListFooter">
        <Button type="primary" htmlType="submit" onClick={() => toShift()}>刷新数据</Button>
        <Button type="primary" htmlType="submit" onClick={() => todelSub()}>取消订阅</Button>
      </div>
    </div>
  )
}
