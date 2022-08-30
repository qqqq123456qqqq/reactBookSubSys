import React, { useState } from 'react'
import IconToFirstPage from '../../../../components/IconToFirstPage';
import { Button, Form, Input, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import './style.less'
import { reqChangeBook, reqSearchBook } from '../../../../api/index-ajax';
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
export default function ChangeBook() {
    const [bookInfo, setbookInfo] = useState({ bookName: "", author: "", publisher: '', bookNum: '', bookImg: '', bookInfo: '' });
    const toChangeBook = async () => {
        let author = document.getElementsByClassName('delTitle')[0];
        let bookName = document.getElementsByClassName('delbookName')[0];
        console.log(author.value, bookName.value)
        try {
            const response = await reqSearchBook({
                author: author.value,
                bookName: bookName.value,
            });
            console.log(response);
            if (response.data.status === 1) {
                setbookInfo(response.data.data[0])
                // localStorage.setItem("delBookLogs",JSON.stringify(response.data.delBookLogs))
            }else{
                alert(response.data.msg)
            }
        } catch (error) {
            console.log("请求失败", error)
        }
    };
    console.log(bookInfo)
    const [fileList, setFileList] = useState([]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file) => {
        console.log(file)
        let src = file.url;

        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = () => resolve(reader.result);
            });
        }

        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    const [form] = Form.useForm();
    // 这里除了返回修改后数据，还需要返回修改前数据用于数据库信息查找
    const onFinish = async (values) => {
        console.log('Received values of form: ', values, fileList);
        let author = document.getElementsByClassName('delTitle')[0];
        let bookName = document.getElementsByClassName('delbookName')[0];
        console.log(author.value, bookName.value)
        try {
            const response = await reqChangeBook({
                preauthor: author.value,
                prebookName: bookName.value,
                author: values.author,
                bookName: values.bookName,
                bookInfo: values.bookInfo,
                publisher: values.publisher,
                bookNum: values.bookNum,
                bookImg: fileList[0].thumbUrl,
            });
            console.log(response);
            if (response.data.status === 1) {
                alert(response.data.msg)
                // localStorage.setItem("delBookLogs",JSON.stringify(response.data.delBookLogs))
            }
        } catch (error) {
            console.log("请求失败", error)
        }
    }
    return (
        <div className='changeBookWrapper'>
            <div className="changeBookHead">
                <IconToFirstPage />
                <div className="changeBookTitle"><span>修改书籍</span></div>
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
                <div className='searchBtn'>
                    <Button type="primary" htmlType="submit" onClick={() => toChangeBook()}>检索<br />书籍</Button>
                </div>
            </div>
            <div className="bookInfos">
                <Form className='re-form'
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    {/* 书名 */}
                    <Form.Item name="bookName" label="书名"
                        rules={[
                            {
                                required: true,
                                message: '请输入书名',
                            },
                        ]} >
                        <Input placeholder={bookInfo.bookName} />
                        {/* 作者 */}
                    </Form.Item>
                    <Form.Item name="author" label="作者"
                        rules={[
                            {
                                required: true,
                                message: '请输入作者,可以输入多位作者,必须英文逗号“,”隔开',
                            },
                        ]} >
                        <Input placeholder={bookInfo.author} />
                    </Form.Item>
                    {/* 出版社 */}
                    <Form.Item name="publisher" label="出版社"
                        rules={[
                            {
                                required: true,
                                message: '请输入出版社',
                            },
                        ]} >
                        <Input placeholder={bookInfo.publisher} />
                    </Form.Item>
                    {/* 数量 */}
                    <Form.Item name="bookNum" label="存入书籍数量"
                        rules={[
                            {
                                required: true,
                                message: '请输入您将要存入书籍的数量',
                            },
                        ]} >
                        <Input placeholder={bookInfo.bookNum} />
                    </Form.Item>
                    {/* 书籍封面--选择文件的那种 */}
                    <ImgCrop rotate>
                        <Upload
                            accept='.jpg,.gif,.png,.jpeg'
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                            // headers={{ 'content-type': 'multipart/form-data' }}
                            beforeUpload={() => false}
                        >
                            {fileList.length < 5 && '+ 书籍封面'}
                        </Upload>
                    </ImgCrop>
                    {/* 书籍内容简介--文本框 */}
                    <Form.Item
                        name="bookInfo"
                        label="书籍内容简介"
                        rules={[
                            {
                                required: true,
                                message: '请输入书籍内容简介',
                            },
                        ]}
                    >
                        <Input.TextArea showCount maxLength={300} placeholder={bookInfo.bookInfo} />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
