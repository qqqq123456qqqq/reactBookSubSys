import React from 'react'
import IconToFirstPage from '../../../../components/IconToFirstPage'
import './style.less'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { reqAddBook } from '../../../../api/index-ajax'
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
export default function AddBook() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  // 不用.then来获取返回，以同步形式实现异步，await用在返回promise的左侧，为了不想要promise而是想要异步执行成功的response，async在里await最近的函数左侧
  const onFinish = async (values) => {
    console.log('Received values of form: ', values, fileList);
    try {
      const response = await reqAddBook(
        {
          author: values.author,
          bookName: values.bookName,
          bookInfo: values.bookInfo,
          publisher: values.publisher,
          bookNum: values.bookNum,
          bookImg: fileList[0].thumbUrl,
        });
      console.log("请求成功", response);
      if (response.data.status === 1) {
        navigate('/admin/manageBooks/addBook', {
          replace: false
        });
      } else if (response.data.status === 0) {
        // 如果当前用户已经存在就提示一下
        alert(response.data.msg)
      }
    } catch (error) {
      console.log("请求失败", error);
    }
  }
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

  return (
    <div>
      <div className="addBookHead">
        <IconToFirstPage />
        <div className="addBookTitle"><span>增加书籍</span></div>
      </div>
      <div className="addBookBody">
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
            <Input />
            {/* 作者 */}
          </Form.Item>
          <Form.Item name="author" label="作者"
            rules={[
              {
                required: true,
                message: '请输入作者,可以输入多位作者,必须英文逗号“,”隔开',
              },
            ]} >
            <Input />
          </Form.Item>
          {/* 出版社 */}
          <Form.Item name="publisher" label="出版社"
            rules={[
              {
                required: true,
                message: '请输入出版社',
              },
            ]} >
            <Input />
          </Form.Item>
          {/* 数量 */}
          <Form.Item name="bookNum" label="存入书籍数量"
            rules={[
              {
                required: true,
                message: '请输入您将要存入书籍的数量',
              },
            ]} >
            <Input />
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
            <Input.TextArea showCount maxLength={300} />
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
