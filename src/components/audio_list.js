import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectAudio} from '../actions';
import rest from "../rest/yle"; //our redux-rest object

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
        var itemStyle = "list-group-item";
        return( list.map( (audio) => {
          if(selectedAudio)
              (audio.id == selectedAudio.id) ?  itemStyle = "list-group-item active" : itemStyle = "list-group-item list-group-item-success"
          return (
            <li key={audio.id} className={itemStyle}  onClick = {() => this.props.dispatch(selectAudio(audio))}>
              {audio.itemTitle.fi ? audio.itemTitle.fi : audio.itemTitle.sv}
            </li>
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
      <div  className="list-group col-md-5 audio-list">
        <center><h3 className="page-header">Audio List</h3></center>
        <ul>
          {this.renderAudios()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {audios: state.audios,selectedAudio: state.selectedAudio}
}

export default connect(mapStateToProps)(AudioList);
