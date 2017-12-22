import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Action from '../../store/actions'
import { IlistAction, IaddClient } from '../../interface'

import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import 'antd-mobile/lib/list/style/index.css'
import 'antd-mobile/lib/toast/style/index.css'
import 'antd-mobile/lib/input-item/style/index.css'
import 'antd-mobile/lib/button/style/index.css'
import 'antd-mobile/lib/wing-blank/style/index.css'
import 'antd-mobile/lib/white-space/style/index.css'

import './addClient.less'

@connect(
  state => ({...state}),
  (dispatch: any) => bindActionCreators(Action, dispatch)
)
export default class ListView extends React.Component<IlistAction, IaddClient> {
  manualFocusInst: any

  constructor (props: IlistAction) {
    super(props)
    this.state = {
      id: null,
      userValue: '',
      phone: '',
      idCard: '',
      buttType: '提 交',
      query: /\/(\w|\d)+$/ig.exec(window.location.pathname)[0].slice(1)
    }
  }

  componentDidMount () {
    if (this.state.query && this.state.query !== 'addClient') {
      this.setState({
        id: parseInt(this.state.query),
        buttType: '修 改'
      })
    } else {
      this.setState({
        id: parseInt(this.state.query),
        buttType: '提 交'
      })
    }
  }

  sendData () {
    console.log('提交')
  }

  onChange (type: any, value: String): void {
    let obj = {} as any
    obj[type] = value
    this.setState(obj)
  }

  render () {
    return (
      <div>
        <List renderHeader={() => '添加客户信息'}>
          <InputItem
            value={this.state.userValue}
            placeholder="请输入客户名称"
            editable={true}
            onChange={this.onChange.bind(this, 'userValue')}
          >姓名</InputItem>
          <InputItem
            type='phone'
            placeholder="请输入手机号"
            onChange={this.onChange.bind(this, 'phone')}
            value={this.state.phone}
          >手机号码</InputItem>
          <InputItem
            placeholder="请输入身份证"
            moneyKeyboardAlign="left"
            onChange={this.onChange.bind(this, 'idCard')}
            value={this.state.idCard}
          >身份证</InputItem>
        </List>
        <WingBlank>
         <Button type="primary" onClick={this.sendData.bind(this)}>{ this.state.buttType }</Button><WhiteSpace />
         {(() => {
           if (this.state.id) return <Button type="warning">删除</Button>
         })()}
        </WingBlank>
      </div>
    )
  }
}