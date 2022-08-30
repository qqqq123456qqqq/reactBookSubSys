import React from 'react'
import './style.less'
import { useNavigate } from 'react-router-dom';
import { reqRegister, usernameValid } from '../../../api/index-ajax';
import { Button, Checkbox, Form, Input, Select } from 'antd';
const { Option } = Select;
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
export default function Register() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  // 不用.then来获取返回，以同步形式实现异步，await用在返回promise的左侧，为了不想要promise而是想要异步执行成功的response，async在里await最近的函数左侧
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    try {
      const response = await reqRegister(
        {
          username: values.username,
          password: values.password,
          jobnum:values.jobNum,
          identify: values.identify,
          phone: values.phone,
          email: values.email,
        });
      console.log("请求成功", response);
      if (response.data.status === 1) {
        navigate('/login', {
          replace: false,
          state: {
            username: values.username,
            jobnum:values.jobnum,
            identify: values.identofy
          }
        });
      } else if (response.data.status === 0) {
        // 如果当前用户已经存在就提示一下
        alert(response.data.msg)
      }
    } catch (error) {
      console.log("请求失败", error);
    }
  }
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
      <div className="register-container">
        <Form className='re-form'
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          scrollToFirstError
        >
          {/* 用户身份选择 选择器 */}
          <Form.Item
            label="身份选择"
            className='identify'
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
                width: 180,
              }}
              placeholder="—身份—"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }>
              <Option value="admin">admin</Option>
              <Option value="user">user</Option>
            </Select>
          </Form.Item>
          {/* 用户名 */}
          <Form.Item name="username" label="用户名"
            rules={[
              {
                required: true,
                pattern: /^[\u4e00-\u9fa5]{0,}$/,
                message: '用户名必须是汉字',
              },
              ({ getFieldValue }) => ({
                // 防止重复注册同一个用户名，及时给用户提示
                async validator(_, value) {
                  let identify = getFieldValue('identify');
                  if (value !== null && identify !== undefined) {
                    try {
                      let response = await usernameValid({ username: value, identify: identify });
                      console.log(response);
                      if (response.data.status === 1) {
                        // setUsernamestate(usernamestate => { return 1; })
                        return Promise.resolve();
                      }
                      else return Promise.reject(new Error(response.data.msg));
                    } catch (error) {
                      console.log("请求失败", error);
                    }
                  }
                  else return Promise.reject(new Error('请先选择您的身份并重新填写用户名'));
                },
              }),
            ]} >
            <Input />
          </Form.Item>
          {/* 学号 */}
          <Form.Item name="jobNum" label="学工号"
            rules={[
              {
                required: true,
                pattern: /^([1-9])[0-9]{9}$/,
                message: 'Please input your jobNum!',
              },
            ]}
            hasFeedback >
            <Input />
          </Form.Item>
          {/* 电子邮箱 */}
          <Form.Item name="email" label="电子邮件"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]} >
            <Input />
          </Form.Item>
          {/* 密码 */}
          <Form.Item name="password" label="密码"
            rules={[
              {
                required: true,
                pattern: /^[A-Za-z0-9]{10}$/,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback >
            <Input.Password />
          </Form.Item>
          {/* 确认密码 */}
          <Form.Item name="confirm" label="确认密码" dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}  >
            <Input.Password />
          </Form.Item>

          {/* 联系电话 */}
          <Form.Item
            name="phone"
            label="联系电话"
            rules={[
              {
                required: true,
                pattern: /^([1-9])[0-9]{10}$/,
                message: '请输入正确的手机联系方式!示例：13391331533',
              },
            ]}>
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the agreement
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
  )
}
