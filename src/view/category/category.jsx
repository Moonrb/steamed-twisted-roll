import React,{Component} from 'react'
import Rollnav from '../../component/rollNav/rollNav'
import style from './category.module.scss'
class Category extends Component{
    render() {
        return(
            <div id={style.category}>
                <Rollnav {...this.props}/>
            </div>
        )
    }
}
export default Category
