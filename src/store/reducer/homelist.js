import {HOME_SWIPER,HOME_COMMODITY} from '../type'
export const homeswiperReducer =(provstate=[],action={})=>{
    let {payload,type} = action;
    switch (type) {
        case HOME_SWIPER:
            return payload;
        default:
            return provstate
    }

};
export const homecommodityReducer =(provstate=[],action={})=>{
    let {payload,type} = action;
    switch (type) {
        case HOME_COMMODITY:
            return payload;
        default:
            return provstate
    }

};
