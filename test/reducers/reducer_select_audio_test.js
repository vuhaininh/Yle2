import {expect} from '../test_helper';
import {SELECT_AUDIO, SELECT_FIRST_AUDIO} from '../../src/actions/';
import selectAudioReducer from '../../src/reducers/reducer_select_audio';
describe('Select Audio Reducer', () => {
  it('handles action with unknown type', () => {
    expect(selectAudioReducer(undefined,{})).to.eql(null);
  });

  it('handles action with SELECT_AUDIO type', () => {
    const action = {type:SELECT_AUDIO, payload:{id: 1,  itemTitle:{fi:"Title 1"}, description:{fi:"Description 1" }}};
    expect(selectAudioReducer(null,action)).to.eql(action.payload);
  });

  it('handles action with SELECT_FIRST_AUDIO type with results > 0', () => {
    const action = { type:SELECT_FIRST_AUDIO,
      data: {data:[{id: 1, itemTitle:{fi:"Title 1"}, description:{fi:"Description 1" }},{id: 2,  itemTitle:{fi:"Title 2"}, description:{fi:"Description 2" }}]}
    };
    expect(selectAudioReducer(null,action)).to.eql(action.data.data[0]);
  });

  it('handles action with SELECT_FIRST_AUDIO type with results = 0', () => {
    const action = { type:SELECT_FIRST_AUDIO,
      data: {data:[]}
    };
    expect(selectAudioReducer(null,action)).to.eql(null);
  });

});
