import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
import reduxPromise from 'redux-promise' //中间件promise处理redux异步处理
import {navlistReducer} from './reducer/navlist' // nav的reducer
import {homeswiperReducer,homecommodityReducer} from './reducer/homelist'

const reducer = combineReducers({
    navlistReducer,
    homeswiperReducer,
    homecommodityReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxPromise)
));
export default store
