import React, { useState } from 'react'
import IconToFirstPage from '../../../../components/IconToFirstPage'
import './style.less'
import { Input } from 'antd';
import { reqSearchUser } from '../../../../api/index-ajax';
const { Search } = Input;
export default function UserInfo() {
    const [userInfo, setUserInfo] = useState([]);
    const onSearch = async (value) => {
        console.log(value);
        try {
            const response = await reqSearchUser({ value: value });
            console.log(response)
            setUserInfo(response.data.userInfo)
        } catch (error) {
            console.log("请求错误", error)
        }
    }
    return (
        <div>
            <div className="userInfoHead">
                <IconToFirstPage />
                <div className="userInfoTitle"><span>用户信息</span></div>
            </div>
            <div className="manageUsersBody">
                <div className='search-wrapper'>
                    <div className="search">
                        <Search
                            placeholder="请输入用户名，点击搜索"
                            onSearch={onSearch}
                            style={{
                                width: 250,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="userInfoWrapper">
                <div className='userInfoListTitle'>
                    <div className="title"><span>类别</span></div>
                    <div className="data"><span>数据</span></div>
                </div>
                {
                    userInfo.length !== 0 ? userInfo.map((userInfoObj) => {
                        return (
                            <div key={userInfoObj._id}>
                                <div className="username">
                                    <div className="title"><span>姓名</span></div>
                                    <div className="data"><span>{userInfoObj.username}</span></div>
                                </div>
                                <div className="password">
                                    <div className="title"><span>密码</span></div>
                                    <div className="data"><span>{userInfoObj.password}</span></div>
                                </div>
                                <div className="jobNum">
                                    <div className="title"><span>学工号</span></div>
                                    <div className="data"><span>{userInfoObj.jobnum}</span></div>
                                </div>
                                <div className="identify">
                                    <div className="title"><span>身份</span></div>
                                    <div className="data"><span>{userInfoObj.identify}</span></div>
                                </div>
                                <div className="phone">
                                    <div className="title"><span>联系方式</span></div>
                                    <div className="data"><span>{userInfoObj.phone}</span></div>
                                </div>
                                <div className="email">
                                    <div className="title"><span>电子邮件</span></div>
                                    <div className="data"><span>{userInfoObj.email}</span></div>
                                </div>
                            </div>
                        )
                    }):<div>暂时无数据</div>
                }
            </div>
        </div>
    )
}
