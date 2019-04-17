import React,{Component} from 'react'
import style from './appHeader.module.scss'
import {NavLink} from 'react-router-dom'
class appHeader extends Component{
    render() {
        return(
            <header id={style.appheader}>
                <NavLink to='/' className={style.a1}>首页</NavLink>
                <ul>
                    <li>
                        <p>Hi! 花卷商城欢迎你~</p>
                    </li>

                    <li>
                        <NavLink to='/login'>登陆</NavLink>
                    </li>
                    <li>
                        <a href="https://m.huajuanmall.com/">花卷app下载</a>
                    </li>
                    <li>
                        <a href="https://www.huajuanmall.com/#/miniDraw">重赏福利小程序</a>
                    </li>
                </ul>
            </header>
        )
    }
}
export default appHeader
