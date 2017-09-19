import { combineReducers } from 'redux';
import todosReducer from './todoReducer';
import realmReducer from './realmReducer';

export default combineReducers({
  todos: todosReducer
});