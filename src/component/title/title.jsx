import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import style from './title.module.scss'

class Title extends Component {
    render() {
        return (
            <div id={style.title}>
                <div className={style.headline}>
                <h1>
                    <Link to='/'>花卷</Link>
                </h1>
                <h3>红人视频购物商城</h3>
               </div>
                <div className={style.cart}><span>我的购物车</span></div>
                <div className={style.seek}>
                    <input type="text" placeholder="请输入想找的红人或商品"/>
                    <button type="submit">大</button>
                </div>
            </div>
        )
    }
}

export default Title
