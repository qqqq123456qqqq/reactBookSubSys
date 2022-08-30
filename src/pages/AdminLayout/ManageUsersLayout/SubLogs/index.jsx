import React, { useState } from 'react'
import IconToFirstPage from '../../../../components/IconToFirstPage'
import './style.less'
import { Button } from 'antd'
import { reqGetSublogs } from '../../../../api/index-ajax';
// import { reqGetApplyList } from '../../../../api/index-ajax';
export default function SubLogs() {
    const [sublogs, setsublogs] = useState([]);
    const toShift = async () => {
        let username = document.getElementsByClassName("username")[0];
        if(username.value==='') alert("您尚未填写您想查询的用户名，直接刷新将返回所有数据")
        try {
            const response = await reqGetSublogs({value:username.value});
            console.log(response)
            setsublogs(response.data.data)
        } catch (error) {
            console.log("请求错误", error)
        }
    }
    return (
        <div>
            <div className="sublogsHeader">
                <IconToFirstPage />
                <div className="sublogsTitle">
                    <span>订阅日志列表</span>
                </div>
            </div>
            <div className="sublogsBody">
                <div className="title-data">
                    <div className="sublogsBodyTitle">
                        <div className="applyPerson"><span>申请人</span></div>
                        <div className="applyBook"><span>申请书籍</span></div>
                        <div className="optionPerson"><span>执行人</span></div>
                        <div className="subStartTime"><span>订阅开始</span></div>
                        <div className="subEndTime"><span>订阅结束</span></div>
                        <div className="subStatus"><span>订阅状态</span></div>
                    </div>
                    <div className="sublogswrapper">
                        {
                            sublogs.length !== 0 ? sublogs.map((oneLog) => {
                                return (
                                    <div className="sublogsData" key={oneLog._id}>
                                        <div className="applyPerson"><span>{oneLog.applyPerson}</span></div>
                                        <div className="applyBook"><span>{oneLog.applyBook}</span></div>
                                        <div className="optionPerson"><span>{oneLog.optionPerson}</span></div>
                                        <div className="subStartTime"><span>{oneLog.subStartTime}</span></div>
                                        <div className="subEndTime"><span>{oneLog.subEndTime}</span></div>
                                        <div className="subStatus"><span>{oneLog.subStatus}</span></div>
                                    </div>
                                )
                            }) : <div>暂无数据</div>
                        }
                    </div>
                </div>
            </div>
            <div className="shift">
               <input type="text" className='username' placeholder='用户名： '/>
                <Button type="primary" htmlType="submit" onClick={() => toShift()}>
                    刷新
                </Button>
            </div>
        </div>
    )
}
