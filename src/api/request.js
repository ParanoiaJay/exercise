//对于axios进行俄二次封装
import axios from 'axios' 
//进度条
import nprogress from 'nprogress'
//进度条样式
import "nprogress/nprogress.css"
const requests = axios.create({
    //配置
    //基础路径
    baseURL:"/api",
    //请求超时时间
    timeout:5000,
})
//请求拦截器
requests.interceptors.request.use((config)=>{
    //config配置对象,包含header
    nprogress.start();
    return config;
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功回调
    //进度条结束
    nprogress.done()
    return res.data
},(error)=>{
    //失败回调函数
    return Promise.reject(new Error('fail'))
})

//暴露
export default axios;