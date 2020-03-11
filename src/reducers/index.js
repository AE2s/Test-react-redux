import { combineReducers } from 'redux';
import counter from './counterReducer';
import todo from './todoReducer';

const counterReducer = combineReducers({
  counter,
  todo,
});

export default counterReducer;
