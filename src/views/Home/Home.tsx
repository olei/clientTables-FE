import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Action from '../../store/actions'
import { IhomeAction, Ihome, IHomeState } from '../../interface'

import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import 'antd-mobile/lib/list/style/index.css'
import 'antd-mobile/lib/toast/style/index.css'
import 'antd-mobile/lib/input-item/style/index.css'
import 'antd-mobile/lib/button/style/index.css'
import 'antd-mobile/lib/wing-blank/style/index.css'
import 'antd-mobile/lib/white-space/style/index.css'

import './Home.less'

@connect(
  state => ({...state}),
  (dispatch: any) => bindActionCreators(Action, dispatch)
)

export default class HomeView extends React.Component<IhomeAction, IHomeState> {

  constructor (props: IhomeAction) {
    super(props)
    this.state = {
      redirect: false,
      userValue: '',
      passwordValue: ''
    }
  }

  componentWillMount () {
    this.props.getVlogin()
  }

  componentWillReceiveProps (nextProps: IhomeAction) {
    if (nextProps.home.vLogin) {
      console.log('已经登录')
    }
    if (!!nextProps.home.data.status) {
      this.setState({
        redirect: true
      })
    }
  }

  onChange (type: any, value: String): void {
    let obj = {} as any
    obj[type] = value
    this.setState(obj)
  }

  getData () {
    this.props.getData(encodeURIComponent(this.state.userValue), this.state.passwordValue)
  }

  render () {
    if (this.state.redirect) {
      return <Redirect push to="/about" />//or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
    }
    return (
      <div>
        <List renderHeader={() => '用户登录'}>
          <InputItem
            value={this.state.userValue}
            placeholder="请输入用户名"
            editable={true}
            onChange={this.onChange.bind(this, 'userValue')}
          >姓名</InputItem>
          <InputItem
            type="password"
            placeholder="请输入密码"
            onChange={this.onChange.bind(this, 'passwordValue')}
            value={this.state.passwordValue}
          >密码</InputItem>
        </List>
        <WhiteSpace />
        <WingBlank>
         <Button type="primary" onClick={this.getData.bind(this)}>登 录</Button>
        </WingBlank>
      </div>
    )
  }
}