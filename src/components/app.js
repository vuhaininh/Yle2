import React, { Component } from 'react';
import SearchBar from './search_bar';
import AudioList from './audio_list';
import AudioDetails from './audio_details';
class App extends Component {
  // Render the App View
  render() {
    return (
      <div>
        <div className="row">
          <SearchBar />
        </div>
        <div className="row">
          <AudioList />
          <AudioDetails />
        </div>
      </div>
    );
  }
}

export default App;
