import {NAV_LIST} from '../../store/type'
import axios from 'axios'

export const navListaction = () =>
    axios.get('/pc/pcIndex/class')
        .then(res=>(
        {
            type:NAV_LIST,
            payload:res.data.goodsClass
        }
    ));

