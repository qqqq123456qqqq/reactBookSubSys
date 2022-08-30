import React from 'react'
import './style.less'
import { useNavigate } from 'react-router-dom'
import { reqLogin } from '../../../api/index-ajax';
import { Button, Checkbox, Form, Input, Select } from 'antd';
const { Option } = Select;
export default function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log('用户输入: ', values);
    // 数据库密码校验
    try {
      const response = await reqLogin(
        {
          username: values.username,
          jobnum: values.jobNum,
          password: values.password,
          identify: values.identify,
        });
      if (response.status === 200 && response.data.status === 1) {
        //身份验证后页面跳转到home主页面。
        localStorage.setItem('userInfo',JSON.stringify(response.data.data[0]));
        navigate('/' + values.identify);
      } else alert(response.data.msg);
    } catch (error) {
      console.log("请求失败", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login-container'>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        {/* 身份 */}
        <Form.Item
          label='identify'
          name="identify"
          rules={[
            {
              required: true,
              message: '请选择您的身份!',
            },
          ]}>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder='--身份--'
            optionFilterProp="children"
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }>
            <Option value="admin">admin</Option>
            <Option value="user">user</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
            span: 10,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 10,
          }}
        >
          <Button  type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
