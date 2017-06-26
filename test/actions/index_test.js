import {expect} from '../test_helper';
import {SELECT_AUDIO, selectAudio} from '../../src/actions/';

describe('Select Audio action', () => {
  const audio = { selectedAudio: {id: 1,  title:{fi:"Title FI", sv:"Title SV"}, description:{fi:"Description FI",sv:"Description SV" }}};
  it('has the correct type', () => {
    const action = selectAudio();
    expect(action.type).to.equal(SELECT_AUDIO);
  });

  it('has the correct payload', () => {
    const action = selectAudio(audio);
    expect(action.payload).to.equal(audio);
  });
});
