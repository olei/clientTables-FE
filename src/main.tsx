import * as React from "react"
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AppRoute from './route'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import './assets/less/reset.less'
import 'antd-mobile/lib/list/style/index.css'
import 'antd-mobile/lib/toast/style/index.css'
import 'antd-mobile/lib/input-item/style/index.css'
import 'antd-mobile/lib/button/style/index.css'
import 'antd-mobile/lib/wing-blank/style/index.css'
import 'antd-mobile/lib/white-space/style/index.css'
import 'antd-mobile/lib/search-bar/style/index.css'
import 'antd-mobile/lib/modal/style/index.css'
import './assets/less/index.less'

let attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

const target: HTMLElement = document.getElementById('app')

class Root extends React.Component {
  render () {
    return (
      <Provider store={store as any}>
        <AppRoute history={history} />
      </Provider>
    )
  }
}

ReactDOM.render(<Root/>, target)
