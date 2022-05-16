/*
 * @Description: 航司客票
 * @Author: mzr
 * @Date: 2022-03-21 10:04:32
 * @LastEditTime: 2022-04-24 14:57:02
 * @LastEditors: mzr
 */
import React, { Component } from "react";
import './airlineTicket.css'
import { Button } from 'antd';


export default class airlineTicket extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    // this.props.onRef(this)
  }

  event() {

  }
  render() {
    return (
      <div className="airlineTicket">
        {/* <Button type="primary" onClick={() => this.event}>Primary Button</Button> */}

      </div>
    )
  }

}