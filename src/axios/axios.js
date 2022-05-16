/*
 * @Description: axios 封装
 * @Author: mzr
 * @Date: 2022-03-18 16:34:01
 * @LastEditTime: 2022-03-21 15:44:52
 * @LastEditors: mzr
 */
import axios from 'axios'

// 创建 axios 实例
let baseurl = ''
if (process.env.NODE_ENV === 'production') {
  baseurl = ''
} else if (process.env.NODE_ENV === 'development') {
  baseurl = ''
}
const instance = axios.create({
  baseURL: baseurl,
  timeout: 30000,
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});