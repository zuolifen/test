import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
//引入composeWithDevTools，用于调试redux代码
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));