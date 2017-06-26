import { renderComponent , expect } from '../test_helper';
import SearchBar from '../../src/components/search_bar';

describe('Search Bar component', () => {
  let component;
  beforeEach( () => {
    component = renderComponent(SearchBar);
  });

  it('should have a text input', () => {
    expect(component.find('input')).to.exist;
  });

  it('text input should have a place holder', () =>{
    expect(component.find('input')).to.have.attr('placeholder');
  });

  it('should have a submit button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Enter some Search Term', () => {
    beforeEach( () => {
      component.find('input').simulate('change','new search term');
    });
    it('shows that text in the text input', () => {
      expect(component.find('input')).to.have.value('new search term');
    });
  });
});
