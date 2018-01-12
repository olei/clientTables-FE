import './assets/less/reset.less'
import './assets/less/index.less'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AppRoute from './route'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

let attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

const target = document.getElementById('app')

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppRoute history={history} />
      </Provider>
    )
  }
}

ReactDOM.render(<Root/>, target)
