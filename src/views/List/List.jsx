import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Action from '../../store/actions'

import { List, SearchBar, Button } from 'antd-mobile'

import './List.less'

const Item = List.Item

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class ListView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false,
      loading: false,
      loadText: '加载数据...',
      total: '--',
      limit: 25,
      offset: 0,
      value: '',
      data: [],
      query: /\/(\w|\d)+$/ig.exec(window.location.pathname)[0].slice(1)
    }
    this.scrollEvent = null
  }

  componentDidMount () {
    this.setState({
      loadText: '加载数据...',
      value: this.props.list.search_key
    })
    if ((this.state.query && !!parseInt(this.state.query)) || (!this.props.list.data.objects || !this.props.list.data.objects.length)) {
      this.setState({
        loading: true
      })
      this.props.clearListData()
      this.props.getListData(this.state.limit, this.state.offset)
    } else {
      this.setData(this.props)
      this.setState({
        offset: (Math.ceil(this.props.list.data.objects.length / this.state.limit) - 1) * this.state.limit
      })
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setData(nextProps)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollEvent)
    this.scrollEvent = null
  }

  setLoadText (val) {
    this.setState({
      loadText: val
    })
  }

  setData (props) {
    const data = props.list.data.objects
    if (!data || data.length % this.state.limit) {
      this.setLoadText('没有更多内容')
      window.removeEventListener('scroll', this.scrollEvent)
      this.scrollEvent = null
    } else {
      this.setLoadText('加载数据...')
      if (!this.scrollEvent) this.scrollEvent = this.bindScroll()
    }
    this.setState({
      loading: false,
      data,
      total: props.list.data.total || '--'
    })
  }

  bindScroll () {
    const body = document.body
    const de = document.documentElement
    const that = this
    window.addEventListener('scroll', sc, false)
    function sc () {
      if (that.state.loading) return
      if ((body.scrollTop || de.scrollTop) >= body.scrollHeight - de.clientHeight - 30) {
        const offset = that.state.offset + that.state.limit
        that.props.getListData(that.state.limit, offset)
        that.setState({
          offset,
          loading: true
        })
      }
    }
    return sc
  }

  onChange (val) {
    this.props.clearListData()
    this.props.setSearchKey(val)
    this.setState({
      value: val,
      offset: 0
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
    if (this.state.redirect) {
      return <Redirect push to="/add/addClient" />
    }
    const data = this.state.data
    let list = data && data.length ? data.map((item, index) => {
      return (
        <Link key={item.id} to={{pathname: `/userinfo/${item.id}`}}>
          <Item extra={item.tPhone} arrow="horizontal" onClick={() => { console.log('show') }}><span className="blue">{ index + 1 < 10 ? `0${index + 1}` : index + 1 }</span> { item.name }</Item>
        </Link>
      )
    }) : ''
    return (
      <div>
        <SearchBar
          placeholder = "搜 索"
          value = {this.state.value}
          onSubmit = {value => console.log(value, 'onSubmit')}
          onClear = {value => console.log(value, 'onClear')}
          onFocus = {() => console.log('onFocus')}
          onBlur = {() => console.log('onBlur')}
          onCancel = {() => console.log('onCancel')}
          onChange = {this.onChange.bind(this)}
        />
        <Button type="primary" inline size="small" onClick={this.add.bind(this)}>添加</Button>
        <List renderHeader={() => `客户列表 共${this.state.total}条结果`} className="my-list">
          { list }
        </List>
        <div className="move">{ this.state.loadText }</div>
      </div>
    )
  }
}