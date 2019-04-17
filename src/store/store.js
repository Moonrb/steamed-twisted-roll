import {createStore,compose,combineReducers,applyMiddleware} from 'redux'
import reduxPromise from 'redux-promise'
const reducer = combineReducers({

});
const store =createStore(reducer,applyMiddleware(reduxPromise));
