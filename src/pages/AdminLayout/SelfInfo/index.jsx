import React, { useState } from 'react'
import IconToFirstPage from '../../../components/IconToFirstPage'
import './style.less'
import {
    Form,
    Input,
    Button,
    Checkbox,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { reqChangSelfInfo, reqDeleteSelf } from '../../../api/index-ajax';



export default function SelfInfo() {
    let current={}
    if(localStorage.getItem("userInfo")!==undefined) current = JSON.parse(localStorage.getItem("userInfo"));
    
    console.log(current)
    const navigate = useNavigate();
    const toDeleteSelf = async()=>{
        try {
            const response = await reqDeleteSelf({username:current.username,identify:current.identify});
            if(response.data.status===1) navigate('/register');
        } catch (error) {
            console.log("请求失败",error)
        }
        
    }
    const toExit = ()=>{
        navigate('/login');
    }
    const FormDisabledDemo = () => {
        const [componentDisabled, setComponentDisabled] = useState(true);
    
        const onFormLayoutChange = ({ disabled }) => {
            setComponentDisabled(disabled);
        };
        const onFinish = async(values) => {
            values.identify = current.identify;
            values.preUsername = current.username;
            console.log('Success:', values);
            try {
                const response =await reqChangSelfInfo({values:values});
                console.log(response);
                if(response.data.status===1) navigate('/login')
            } catch (error) {
                console.log("请求出错",error)
            }
        };
    
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        
        return (
            <>
                <Checkbox
                    checked={componentDisabled}
                    onChange={(e) => setComponentDisabled(e.target.checked)}
                >
                    点击可进行修改个人信息，修改完点击提交
                </Checkbox>
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
                    layout="horizontal"
                    onValuesChange={onFormLayoutChange}
                    disabled={componentDisabled}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="姓名"
                        name="username"
                    >
                        <Input placeholder={current.username}/>
                    </Form.Item>
    
                    <Form.Item
                        label="密码"
                        name="password"
                    >
                        <Input.Password placeholder={current.password}/>
                    </Form.Item>
                    <Form.Item
                        label="学工号"
                        name="jobnum"
                    >
                        <Input.Password placeholder={current.jobnum}/>
                    </Form.Item>
                    <Form.Item
                        label="身份"
                        name="identify"
                    >
                        <Input disabled placeholder={current.identify}/>
                    </Form.Item>
                    <Form.Item
                        label="联系方式"
                        name="phone"
                    >
                        <Input.Password placeholder={current.phone}/>
                    </Form.Item>
                    <Form.Item
                        label="电子邮件"
                        name="email"
                    >
                        <Input.Password placeholder={current.email}/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </>
        );
    };
    return (
        <div>
            <div className="selfInfo-head">
                <IconToFirstPage />
                <div className='selfInfo-title'><span>个人信息管理</span></div>
            </div>
            <div className="selfInfo-body">
                <FormDisabledDemo />
            </div>
            <div className="selfInfo-footer">
                <Button type="primary" htmlType="submit" onClick={()=>toDeleteSelf()}>
                    注销登录
                </Button>
                <Button type="primary" htmlType="submit" onClick={()=>toExit()}>
                    退出登录
                </Button>
            </div>
        </div>
    )
}
