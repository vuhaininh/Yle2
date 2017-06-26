import { combineReducers } from 'redux';
import SelectAudio from './reducer_select_audio'
import rest from "../rest/yle"; //our redux-rest object
const rootReducer = combineReducers(
  {...rest.reducers,selectedAudio: SelectAudio}
);

export default rootReducer;
