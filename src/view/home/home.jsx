import React, {Component} from 'react'
import Rollnav from '../../component/rollNav/rollNav'
import {connect} from 'react-redux'
import {homeswiperAction, homecommodityAction} from './actionCreate'
import Swiper from '../../component/swiper/swiper'

class Home extends Component {
    render() {
        return (
            <div>
                <Rollnav {...this.props}/>
                <Swiper {...this.props} swiperlist={this.props.homeswiperlist}/>
            </div>
        )
    }
    componentDidMount() {
        this.props.homeswiperAction();
        this.props.homecommodityAction();
    }
}

const mapStatetoProps = (state) => ({

    homeswiperlist: state.homeswiperReducer,
    homecommoditylist: state.homecommodityReducer

});
const mapDispathtoProps = {
    homeswiperAction,
    homecommodityAction
};
export default connect(mapStatetoProps,mapDispathtoProps)(Home)
