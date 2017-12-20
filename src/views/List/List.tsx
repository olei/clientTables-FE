import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Action from '../../store/actions'
import { IlistAction, IListState } from '../../interface'

import { List, SearchBar } from 'antd-mobile'
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
  }

  render () {
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
        <List renderHeader={() => '客户列表 (共 300 人)'} className="my-list">
          {this.state.data.map((item: any, index: number) => {
            return (
              <Link key={item.id} to={{pathname: `/about`}}>
                <Item extra={item.phone} arrow="horizontal" onClick={() => { console.log('show') }}>{ item.name }</Item>
              </Link>
            )
          })}
        </List>
      </div>
    )
  }
}