import { renderComponent , expect } from '../test_helper';
import AudioDetails from '../../src/components/audio_details';

describe('Audio Details component', () => {
  let component;
  beforeEach( () => {
    const props = { selectedAudio: {id: 1,  title:{fi:"Title FI", sv:"Title SV"}, description:{fi:"Description FI",sv:"Description SV" }}
    };
    component = renderComponent(AudioDetails,null, props);
  });

  it('should have Header', () =>{
    expect(component.find('h3')).to.have.class('page-header');
  });
  it('should have Title', () =>{
    expect(component).to.contain('Title');
  });
  it('should have Description', () =>{
    expect(component).to.have.contain('Description');
  });

  describe('Audio Details shows correct info', () => {
    it('shows correct title', () =>{
      expect(component).to.contain('Title FI');
    });

    it('shows correct description', () =>{
      expect(component).to.contain('Description FI');
    });
  });
});
