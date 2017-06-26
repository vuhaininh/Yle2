import {SELECT_AUDIO, SELECT_FIRST_AUDIO} from '../actions';
export default function(state = null, action){
  switch(action.type){
    case SELECT_AUDIO:
      return action.payload;
    case SELECT_FIRST_AUDIO:
      if(action.data.data.length != 0)
        return action.data.data[0];
      return null;
  }
  return state;
}
