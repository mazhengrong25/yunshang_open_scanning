/*
 * @Description: 采用hook函数(组件)传值 +  悬停效果测试
 * @Author: mzr
 * @Date: 2022-04-13 14:25:14
 * @LastEditTime: 2022-04-25 18:18:53
 * @LastEditors: mzr
 */
import React from 'react'
import './childPage.css'
import { Button } from 'antd'

// import Child from './airlineTicket'
function childPage(props) {
  // const [value, setValue] = useState("child子组件")
  // props 传值
  // function childEvent(props) {
  //   console.log('props', props)
  // }

  // useRef
  const childEvent = (val) => {
    // setValue(val)
    console.log('子组件事件')
  }
  return (
    <div className="childPage">
      {/* <Button onClick={childEvent}>子组件</Button> */}
      {/* <Child></Child> */}
      <div className="test_clip"></div>
      <div className="test_hover"></div>
      <div>内容</div>
      <div>内容</div>
    </div>
  )
}

export default childPage