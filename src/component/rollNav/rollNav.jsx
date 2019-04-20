import React, {Component} from 'react'
import style from './rollNav.module.scss'
import {connect} from 'react-redux' // 创建容器组件
import {navListaction} from './actionCreate'
import Table from '../table-options/table'

class RollNav extends Component {
    state = {
        navlist: []
    };

    render() {
        return (
            <div id={style.rollNav}>
                <ul>
                    {
                        this.props.navlist.navlistReducer ?
                            (this.props.navlist.navlistReducer).map(item => (
                                <Table key={item.gc_id} id={item.gc_id} path='/category' {...this.props}
                                       name={item.gc_name} src={item.pc_icon}>

                                    <ul>
                                        {
                                            (item.children).map(item => (
                                                <Table key={item.gc_id} id={item.gc_id}
                                                       path='/category' {...this.props} name={item.gc_name}>
                                                </Table>
                                            ))
                                        }
                                    </ul>


                                </Table>
                            ))
                            :
                            null


                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        if (this.props.navlist.navlistReducer.length === 0) {
            this.props.navListaction()

        }
    }

    componentDidUpdate() {

    }
}

const mapStatetoProps = (state) => ({
    navlist: state
});
const mapDispathtoprops = {
    navListaction
};
export default connect(mapStatetoProps, mapDispathtoprops)(RollNav)
