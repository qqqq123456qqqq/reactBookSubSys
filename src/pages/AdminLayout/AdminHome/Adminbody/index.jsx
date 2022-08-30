import React from 'react'
import { Carousel } from 'antd';
import '../../../../assets/iconfont.css'
import './style.less'
import { NavLink } from 'react-router-dom';
// import PubSub from 'pubsub-js'
import HomeBooks from './HomeBooks';
export default function AdminBody() {
    const contentStyle = {
        height: '160px',
        width: '300px',
        color: '#fff',
        margin: '0 auto',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    // console.log(localStorage.getItem('selectBooks'))
    // 在轮播图、搜索框、底部三连接的公共组件里进行订阅，才能保持这个组件在监听的时候没有刷新页面产生新的订阅id
    // const [imgs, setImglist] = useState([{ id: '001', name: "示例1", author: '示例1', publisher: '示例1', img: '' }]);
    return (
        <div>
            <div className="crollBooksContainer">
                <div className="crollBooks">
                    <Carousel autoplay>
                        {
                            localStorage.getItem('selectBooks') !==null ? JSON.parse(localStorage.getItem('selectBooks')).map((imgObj) => {
                                return (
                                    <div key={imgObj.id}>
                                        <img style={contentStyle} src={imgObj.bookImg} alt="加载失败或未设置轮播图书籍" />
                                    </div>
                                )
                            }):<div>暂无数据</div>
                        }
                    </Carousel>
                </div>
                <NavLink to='/admin/searchResultPage'>
                    <div className="controlcrollBooks">
                        <span className='iconfont icon-shezhi'></span>
                    </div>
                </NavLink>

            </div>
            <div className='show-select'>
                <HomeBooks state={JSON.parse(localStorage.getItem('selectBooks'))}/>
            </div>

        </div>
    )
}
