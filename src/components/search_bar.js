import React, { Component } from 'react';
import {connect} from 'react-redux';
import rest from "../rest/yle"; //our redux-rest object
class SearchBar extends Component{

  // Constructor to init state of the Search Bar component

  constructor(props){
    super(props);
    this.state = { term: ' ' }; // Set Search Term to empty
  }

  // Render elements of Search Bar component
  render(){
    return(
      <div className="search-bar">
        <form  onSubmit={this.onSearch.bind(this)}>
          <input type="text" onChange={ event => this.onInputChange(event.target.value)} placeholder="Input search term: i.e Finland"/>
          <button type="submit" className="search-button"> Search </button>
        </form>

      </div>
    );
  }

  // When user typing Search Term, save search term into component state
  onInputChange(term){
    this.setState( {term} );
  }

  // Search Audio based on search term
  onSearch(e){
    e.preventDefault();
    //Call get request to YLE to get audio list based on search term
    this.props.dispatch(rest.actions.audios({term:this.state.term})); // call the api function to fetch the audio list
  }

}

// Export Search Bar Component
export default connect()(SearchBar);
