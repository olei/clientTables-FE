import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Action from '../../store/actions'
import { IuserInfoProps, IuserInfoState } from '../../interface'

import { List, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile'
// import 'antd-mobile/lib/list/style/index.css'
// import 'antd-mobile/lib/toast/style/index.css'
// import 'antd-mobile/lib/button/style/index.css'
// import 'antd-mobile/lib/wing-blank/style/index.css'
// import 'antd-mobile/lib/white-space/style/index.css'

const Item = List.Item

import './userInfo.less'

@connect(
  state => ({...state}),
  (dispatch: any) => bindActionCreators(Action, dispatch)
)
export default class ListView extends React.Component<IuserInfoProps, IuserInfoState> {
  constructor (props: IuserInfoProps) {
    super(props)
    this.state = {
      query: /\/(\w|\d)+$/ig.exec(window.location.pathname)[0].slice(1)
    }
  }

  componentDidMount () {
    // if (this.props.user.data && !this.props.user.data.data) {
      this.props.getUserData(this.state.query)
    // }
  }

  componentWillReceiveProps (nextProps: IuserInfoProps) {
    const data = nextProps.user.data
    if (!data.status) {
      alert(data.message)
    }
  }

  render () {
    const data = this.props.user.data.data
    const name = data && data.name ? data.name : ''
    const gender = data && data.gender >= 0 ? data.gender : ''
    const age = data && data.age ? data.age : ''
    const phone = data && data.phone ? data.phone : ''
    const idCard = data && data.idCard ? data.idCard : ''
    const remarks = data && data.remarks ? data.remarks : ''
    const create_time = data && data.create_time ? data.create_time : ''
    return (
      <div>
        <List renderHeader={() => '用户信息'} className="my-list">
          <Item extra={ name }>姓名</Item>
          <Item extra={ gender % 2 ? '男' : '女' }>性别</Item>
          <Item extra={ age }>年龄</Item>
          <Item extra={ phone }>电话</Item>
          <Item extra={ idCard }>身份证</Item>
        </List>
        {(() => {
          if (remarks) {
            return (
              <List renderHeader={() => '备注'} className="my-list">
                <Item wrap>{ remarks }</Item>
              </List>
            )
          }
        })()}
        <List renderHeader={() => '创建时间'} className="my-list">
          <Item wrap>{ create_time }</Item>
        </List>
        <WingBlank>
          <Link to={{pathname: `/add/${this.state.query}`}}>
            <Button type="primary">编辑</Button>
          </Link>
        </WingBlank>
      </div>
    )
  }
}