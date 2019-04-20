import {NAV_LIST} from '../type'
export const navlistReducer =(provstate=[],action={})=>{
    let {payload,type} = action;
    switch (type) {
        case NAV_LIST:
            return payload;
        default:
            return provstate;
    }
};
