import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Action from '../../store/actions'
import { IlistAction, IListState } from '../../interface'

import { List, SearchBar, Button } from 'antd-mobile'
import 'antd-mobile/lib/list/style/index.css'
import 'antd-mobile/lib/search-bar/style/index.css'
import './List.less'

const Item = List.Item
const Brief = Item.Brief

@connect(
  state => ({...state}),
  (dispatch: any) => bindActionCreators(Action, dispatch)
)
export default class ListView extends React.Component<IlistAction, IListState> {
  manualFocusInst: any

  constructor (props: IlistAction) {
    super(props)
    this.state = {
      redirect: false,
      limit: 25,
      offset: 0,
      value: '',
      data: []
    }
  }

  componentDidMount() {
    this.props.getListData(this.state.limit, this.state.offset)
  }

  componentWillReceiveProps (nextProps: IlistAction) {
    this.setState({
      data: nextProps.list.data.objects
    })
  }

  onChange (val: any) {
    this.setState({
      value: val
    })
    this.props.getSearchData(val)
    if (!val) this.props.getListData(this.state.limit, this.state.offset)
  }

  add () {
    this.setState({
      redirect: true
    })
  }

  render () {
    // if (this.props.list.data && !this.props.list.data.status) {
    //   return <Redirect push to="/" />
    // }
    if (this.state.redirect) {
      return <Redirect push to="/add/addClient" />//or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
    }
    let data = this.state.data
    let list = data && data.length ? data.map((item: any, index: number) => {
      return (
        <Link key={item.id} to={{pathname: `/about`}}>
          <Item extra={item.phone} arrow="horizontal" onClick={() => { console.log('show') }}>{ item.name }</Item>
        </Link>
      )
    }) : ''
    return (
      <div>
        <SearchBar
        placeholder="搜 索"
        ref = {ref => this.manualFocusInst = ref}
        value = {this.state.value}
        onSubmit = {(value: any) => console.log(value, 'onSubmit')}
        onClear = {(value: any) => console.log(value, 'onClear')}
        onFocus = {() => console.log('onFocus')}
        onBlur = {() => console.log('onBlur')}
        onCancel = {() => console.log('onCancel')}
        onChange = {this.onChange.bind(this)}
        />
        <Button type="primary" inline size="small" onClick={this.add.bind(this)}>添加</Button>
        <List renderHeader={() => '客户列表'} className="my-list">
          { list }
        </List>
        <div className="move">没有更多数据</div>
      </div>
    )
  }
}