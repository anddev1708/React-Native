import { createStore } from 'redux';
import reducers from './Index';

let store = createStore(reducers);

export default store;