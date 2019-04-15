import React from 'react'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import App from '../App'
import Home from '../view/home/home' // 首页
import Category from '../view/category/category' // 导航页
import Detail from '../view/detail/detail' // 详情页
import Login from '../view/login/login' // 登录页
const rollRouter = (
    <Router>
        <App>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/category/:id' component={Category} exact/>
                <Route path='/detail/:id' component={Detail} exact/>
                <Route path='/login' component={Login}/>
                <Redirect from='/' to='/home'/>
            </Switch>
        </App>
    </Router>
);
export default rollRouter
