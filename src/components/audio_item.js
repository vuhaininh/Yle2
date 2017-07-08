import React from 'react';

const AudioItem = (props) => {
  const audio = props.audio;

  return(
    <div className='audio-item'>
      <li className="list-group-item list-group-item-success" data-toggle="collapse" data-target={`#${audio.id}`}>
        {audio.itemTitle.fi ? audio.itemTitle.fi : audio.itemTitle.sv}
        <div id={audio.id} className="collapse">
          <b>Description</b>
          <ul className="list-group">
              <p>{audio.description.fi ? audio.description.fi : audio.description.sv  }</p>
          </ul>
        </div>
      </li>
    </div>
  )
}
export default AudioItem;
