import React, { useEffect, useState } from 'react'
// import PubSub from 'pubsub-js'
import { useLocation } from 'react-router-dom';
import { Checkbox, Col, Row } from 'antd';
import SetcrollBooks from './SetCrollBooks';
import './style.less'
export default function SearchResultPage() {
    // 保存服务器传来的书籍
    const [bookList, setBookList] = useState([]);
    // 保存供轮播图选择的书籍
    const [selectBooks, setSelectBooks] = useState([]);
    // 这里要处理服务器返回的数据,保存在bookList状态里
    const location = useLocation();
    useEffect(() => {
        if (location.state===null) return;
        else {
            setBookList(location.state);
            console.log("将服务器数据保存到bookList")
        }
    }, [location.state])
    // 对服务器数据每进行一次勾选，就将供轮播图选择的数据更新
    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        // 每次给checkValues加id，这样selectBooks就是有id的，且以当前selectBooks为基础长度，
        // 解决由于相同书的渲染导致的key不唯一问题
        let seLength = selectBooks.length;
        // 存储添加指定id后的数据，现在的情况就是，只能在下面添加，不让删除，但会里一个清空的按钮
        let newList = [];
        // 对选择的数据在select中进行一次筛选，防止一本书多选,num计数
        let num = 0;
        if (seLength !== 0) {
            for (let i = 0; i < seLength; i++) {
                if ((selectBooks[i].bookName === checkedValues[0].bookName)
                    && (selectBooks[i].publisher === checkedValues[0].publisher) &&
                    (selectBooks[i].author === checkedValues[0].author)) {//当从上面选择的书checkedValues不在下面selectBooks时
                    break;
                }
                else {
                    num++;
                }
            }
        }
        if (num === seLength){
            checkedValues[0].id = seLength;
            checkedValues[0].identify = "crollChart"
            newList = [...selectBooks, ...checkedValues];
        } else{
            newList = [...selectBooks]
        }


        // 这个时候，上下两个用的id都不一样，一个是_id,一个是动态地根据长度分配的id
        console.log(newList);
        setSelectBooks(newList);
        // 保证每次把选择的数据,从BookList中删除checkedValues
        if (checkedValues.length === bookList.length) setBookList([]);
        else {
            let newBookList = [...bookList];
            console.log(newBookList)
            for (let i = 0; i < checkedValues.length; i++) {
                newBookList.splice(newBookList.indexOf(checkedValues[i]), 1)
            }
            console.log(newBookList)
            setBookList(newBookList)
        }
    };
    return (
        <div>
            <div className='booksInfocontainer'>
                <div className='title'>
                    <div><span>书籍封面</span></div>
                    <div><span>书名</span></div>
                    <div><span>作者</span></div>
                    <div><span>出版社</span></div>
                </div>
                <Checkbox.Group style={{ width: '100%', }} onChange={onChange}>
                    {
                        bookList.length !== 0 ? bookList.map((bookObj) => {
                            return (
                                <Row className='row' key={bookObj._id} >
                                    <Col span={50}>
                                        <Checkbox value={bookObj}>
                                            <div className="bookInfoContainer" >
                                                <div className='bookImg'><img src={bookObj.bookImg} alt="加载失败" /></div>
                                                <div className='bookName'><span>{bookObj.bookName}</span></div>
                                                <div className='bookAuthor'><span>{bookObj.author}</span></div>
                                                <div className='bookPublisher'><span>{bookObj.publisher}</span></div>
                                            </div>
                                        </Checkbox>
                                    </Col>
                                </Row>
                            )
                        })
                            : <div>暂无书籍，请搜索</div>
                    }
                </Checkbox.Group>
            </div>
            <div className="setcrollchart">
                <SetcrollBooks state={selectBooks} />
            </div>
        </div>

    )
}
