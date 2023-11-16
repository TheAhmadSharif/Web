import { applyMiddleware, createStore } from "redux";
import reducers from './reducers/index.js';

const thunkMiddleware = require('redux-thunk').default;

const store = createStore(reducers, 
    {},
    applyMiddleware(thunkMiddleware)
    );

export default store;
