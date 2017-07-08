import { combineReducers } from 'redux';
import rest from "../rest/yle"; //our redux-rest object
const rootReducer = combineReducers(
  rest.reducers
);

export default rootReducer;
