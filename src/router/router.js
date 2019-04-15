import React from 'react'
import {HashRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import App from '../App'
import Home from '../view/home/home'
import Category from '../view/home/home'
import Detail from '../view/home/home'
import Login from '../view/home/home'
const  rollRouter = (
    <Router>
        <App>
            <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/category/:id' component={Category}/>
            <Route path='/detail' component={Detail}/>
            <Route path='/login' component={Login}/>
            <Redirect from='/' to='/home'/>
        </Switch>
        </App>
    </Router>
);
export default rollRouter
