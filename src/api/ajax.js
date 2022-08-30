/**
 * 发送异步ajax请求的函数模块，axios二次封装，返回值是promise对象
 */
import axios from 'axios'
import { message } from 'antd';

export default function ajax(url, data = {}, type = 'get') {
    return new Promise((resolve, reject) => {
        let promise;
        //1. 执行异步ajax请求
        if (type === 'get') {
            // get请求
            promise = axios.get(url, {
                // 配置对象,指定请求参数
                params: data
            })
        } else {
            console.log("发送post请求",url)
            // 发送post请求
            promise = axios.post(url, data)
        }
        //2. 如果成功，调用resolve
        promise.then(response => {
            resolve(response)
        }).catch(error => {// 如果失败了，不调用reject（reason），而是提示异常信息
            console.log(error);
            message.error("请求出错：" + error.message)
        })

    })

}