/*
 * @Description: 入口文件
 * @Author: mzr
 * @Date: 2022-03-21 10:58:34
 * @LastEditTime: 2022-04-24 13:49:25
 * @LastEditors: mzr
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'

// 页面
import airlineTicket from '../airlineTicket/airlineTicket'
import childPage from "../childPage/childPage";

// 日期处理
import moment from 'moment'
moment.locale('zh-cn')

export default class App extends Component {
  render() {
    return (
      // react-router-dom 版本为6的写法
      // <Routes>
      //   <Route exact path='/airlineTicket' element={<airlineTicket />}></Route>
      // </Routes>
      <Router>
        <Route path='/' component={airlineTicket}></Route>
        <Route path='/child' component={childPage}></Route>
      </Router>
    )
  }
}