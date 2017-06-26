import React, {Component} from 'react';
import {connect} from 'react-redux';

class AudioDetails extends Component{
  render(){
    const {selectedAudio} = this.props;

    if(selectedAudio){
      return(
        <div className="col-md-7 audio-details">
          <center><h3 className="page-header">Detail Info</h3></center>
          <h4>Title: {selectedAudio.title.fi ? selectedAudio.title.fi : selectedAudio.title.sv  }</h4>
          <p>Description: {selectedAudio.description.fi ? selectedAudio.description.fi : selectedAudio.description.sv  }</p>
        </div>
      );
    }
    return <div className="audio-details"></div>
  }
}
function mapStateToProps(state){
  return {selectedAudio: state.selectedAudio}
}
export default connect(mapStateToProps)(AudioDetails);
