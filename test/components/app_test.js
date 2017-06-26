import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
import AudioDetails from '../../src/components/audio_details';
import SearchBar from '../../src/components/search_bar';
import AudioList from '../../src/components/audio_list';

describe('App Component' , () => {
  let component, searchBar, audioList, audioDetails;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('App can be rendered', () => {
    expect(component).to.exist;
  });

  describe('App renders child components', () => {
    beforeEach(() => {
      searchBar = renderComponent(SearchBar);
      audioList = renderComponent(AudioList);
      audioDetails = renderComponent(AudioDetails)
    });
    it('Search Bar can be rendered', () => {
      expect(searchBar).to.exist;
    });
    it('Audio List can be rendered', () => {
      expect(audioList).to.exist;
    });
    it('Audio Details can be rendered', () => {
      expect(audioDetails).to.exist;
    });
  });

  it('shows a search bar', () => {
    expect(component.find('.search-bar')).to.exist;
  });

  it('shows an audio list', () => {
    expect(component.find('.audio-list')).to.exist;
  });
  it('shows an audio item details', () => {
    expect(component.find('.audio-details')).to.exist;
  });
});
