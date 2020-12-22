import {combineReducers,applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


const store = createStore(composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
    console.log(store.getState())
})

export default store;