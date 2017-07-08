import { renderComponent , expect } from '../test_helper';
import AudioList from '../../src/components/audio_list';

describe('Audio List Component', () => {
  let component;
  beforeEach( () => {
    const props = { audios:{data: {data:
          [{id: 1, itemTitle:{fi:"Title 1"}, description:{fi:"Description 1" }},{id: 2,  itemTitle:{fi:"Title 2"}, description:{fi:"Description 2" }}]
        }}
    };
    component = renderComponent(AudioList,null, props);
  });
  describe('Audio Item Component', () => {
    it('shows correct description', () => {
      expect(component).to.contain('Description 1');
      expect(component).to.contain('Description 2');
    });
    it('should have correct class', () =>{
      expect(component.find('div')).to.have.class('audio-item');
    });

  });
  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each audio that is provided', () => {
    expect(component).to.contain('Title 1');
    expect(component).to.contain('Title 2');
  });

  it('should have header', () =>{
    expect(component.find('h3')).to.have.class('page-header');
  });

  describe('When there is no data to display', () => {
    let noDataComponent;
    beforeEach( () => {
      const props = { audios:{data: {data:
            []
          }}
      };
      noDataComponent = renderComponent(AudioList,null, props);
    });
    it('show no result message',() => {
      expect(noDataComponent).to.contain('No audio matches the search term');
    });
  });

});
