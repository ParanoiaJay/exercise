//对于axios进行俄二次封装
import axios from 'axios' 
import { config } from 'vue/types/umd';
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
    return config;
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功回调
    return res.data
},(error)=>{
    //失败回调函数
    return Promise.reject(new Error('fail'))
})

//暴露
export default axios;