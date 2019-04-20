import {HOME_SWIPER,HOME_COMMODITY} from "../../store/type"
import axios from 'axios'
export const homeswiperAction =()=>
    axios.get('/pc/pcIndex/recHot')
        .then(res=>({
            type:HOME_SWIPER,
            payload:res.data.ad
        }));
export const homecommodityAction =()=>
    axios.get('/pc/pcIndex/toutiao')
        .then(res=>({
            type:HOME_COMMODITY,
            payload:res.data.toutiao
        }));
