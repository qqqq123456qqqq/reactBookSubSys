import React, { useState } from 'react'
import IconToFirstPage from '../../../../components/IconToFirstPage'
import './style.less'
import { Button } from 'antd'
import { reqagreeSub, reqGetApplyList, reqrejectSub } from '../../../../api/index-ajax';
export default function ApplyList() {
    const [applyList, setapplyList] = useState([]);
    const toShift = async () => {
        let username = document.getElementsByClassName("username1")[0];
        if(username.value==='') alert("您尚未填写您想查询的用户名，直接刷新将返回所有数据")
        try {
            const response = await reqGetApplyList({ value: username.value });
            console.log(response)
            setapplyList(response.data.data)
        } catch (error) {
            console.log("请求错误", error)
        }
    }
    console.log(JSON.parse(localStorage.getItem('userInfo')).username)
    const rejectSub = async(oneApply)=>{
        const response = await reqrejectSub({applyPerson:oneApply.applyPerson,applyBook:oneApply.applyBook,optionPerson:JSON.parse(localStorage.getItem('userInfo')).username});
        console.log(response)
        alert(response.data.msg);
    }
    const agreeSub = async(oneApply)=>{
        const response = await reqagreeSub({applyPerson:oneApply.applyPerson,applyBook:oneApply.applyBook,optionPerson:JSON.parse(localStorage.getItem('userInfo')).username});
        console.log(response)
        alert(response.data.msg);
    }
    return (
        <div>
            <div className="applyListHeader">
                <IconToFirstPage />
                <div className="applyListTitle">
                    <span>申请列表</span>
                </div>
            </div>
            <div className="applyListBody">
                <div className="title-data">
                    <div className="applyListBodyTitle">
                        <div className="applyPerson"><span>申请人</span></div>
                        <div className="applyBook"><span>申请书籍</span></div>
                        <div className="applyBookTime"><span>申请时间</span></div>
                        <div className="subStartTime"><span>订阅开始</span></div>
                        <div className="subEndTime"><span>订阅结束</span></div>
                        <div className="option"><span>操作</span></div>
                    </div>
                    <div className="applyListwrapper">
                        {
                            applyList.length !== 0 ? applyList.map((oneApply) => {
                                return (
                                    <div className="applyListData" key={oneApply._id}>
                                        <div className="applyPerson"><span>{oneApply.applyPerson}</span></div>
                                        <div className="applyBook"><span>{oneApply.applyBook}</span></div>
                                        <div className="applyBookTime"><span>{oneApply.applyBookTime}</span></div>
                                        <div className="subStartTime"><span>{oneApply.subStartTime}</span></div>
                                        <div className="subEndTime"><span>{oneApply.subEndTime}</span></div>
                                        <div className="option"><Button type="primary" htmlType="submit" onClick={()=>agreeSub(oneApply)}>同意</Button><Button type="primary" htmlType="submit" onClick={()=>rejectSub(oneApply)}>拒绝</Button></div>
                                    </div>
                                )
                            }) : <div>暂无数据</div>
                        }
                    </div>
                </div>
            </div>
            <div className="shift">
                <input type="text" className='username1' placeholder='用户名： ' />
                <Button type="primary" htmlType="submit" onClick={() => toShift()}>
                    刷新
                </Button>
            </div>
        </div>
    )
}
