import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Action from '../../store/actions'

import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile'

import './Home.less'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)

export default class HomeView extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      redirect: false,
      userValue: '',
      passwordValue: '',
      showInput: 'none'
    }
  }

  componentWillMount () {
    this.props.getVlogin()
    this.props.home.vLogin && this.vlogin()
  }

  componentWillReceiveProps (nextProps) {

    if (nextProps.home.vLogin) {
      this.vlogin()
    } else {
      this.setState({
        showInput: ''
      })
    }
    if (!!nextProps.home.data.status) {
      this.vlogin()
    } else if (nextProps.home.data.message) {
      alert(nextProps.home.data.message)
    }
  }

  vlogin () {
    this.setState({
      redirect: true
    })
  }

  onChange (type, value) {
    let obj = {}
    obj[type] = value
    this.setState(obj)
  }

  getData () {
    this.props.getData(encodeURIComponent(this.state.userValue), this.state.passwordValue)
  }

  render () {
    if (this.state.redirect) {
      return <Redirect push to="/list/0" />//or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
    }
    return (
      <div>
        <div style={{display: this.state.showInput}}>
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
      </div>
    )
  }
}