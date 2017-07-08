import React, {Component} from 'react';
import {connect} from 'react-redux';
import rest from '../rest/yle'; //our redux-rest object
import AudioItem from './audio_item';
class AudioList extends Component{

  componentDidMount(){
    this.props.dispatch(rest.actions.audios({term:"Finland"})); // call the api function to fetch the audio list default search term "Suomi"
  }

  // Render the Audio List View
  renderAudios(){
    const {audios,selectedAudio} = this.props;
    const list = audios.data.data;
    if(list){
      if (list.length == 0)
        return <div> No audio matches the search term</div> // In case there is no search Result for the keyword
      else{
        //Render View <li> for each audio item in the list
        return( list.map( (audio) => {
          return (
            <AudioItem key={audio.id} audio = {audio} />
          );
        }));
      }
    }
    else {
      // When fetching data, show Loading
      return <div className="audio-list">Loading...</div>

    }
  }

  render(){
    return(
      <div  className="list-group col-md-12 audio-list">
        <center><h3 className="page-header">Audio List</h3></center>
        <ul>
          {this.renderAudios()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {audios: state.audios}
}

export default connect(mapStateToProps)(AudioList);
