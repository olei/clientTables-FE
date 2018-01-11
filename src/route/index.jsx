import * as React from 'react'
// BrowserRouter h5 histore 路由
import { BrowserRouter, HashRouter, Switch, Route, Router as Rt } from 'react-router-dom'

import HomeView from '../views/Home/Home'
import ListView from '../views/List/List'
import userInfoView from '../views/userInfo/userInfo'
import addView from '../views/addClient/addClient'
import NotFound from '../views/NotFound/NotFound'

const routes = <Switch>
  <Route exact path="/" component={HomeView}></Route>
  <Route path="/list/:type" component={ListView}></Route>
  <Route path="/userinfo/:id" component={userInfoView}></Route>
  <Route path="/add/:id" component={addView}></Route>
  <Route path="/about" component={NotFound}></Route>
</Switch>

export default class Router extends React.Component {
  constructor (props) {
    super(props)
  }

  // render () {
  //   return (
  //     <div>
  //       <Router history={history}>
  //         <Route exact path="/" component={HomeView}></Route>
  //         <Route path="/about" component={NotFound}></Route>
  //       </Router>
  //     </div>
  //   )
  // }
  render() {
    return (
      <BrowserRouter children={ routes } />
    )
  }

}