export const SELECT_AUDIO = 'SELECT_AUDIO';
export const SELECT_FIRST_AUDIO = 'SELECT_FIRST_AUDIO';

export function selectAudio(audio){
  return {
    type: SELECT_AUDIO,
    payload: audio
  };
}
