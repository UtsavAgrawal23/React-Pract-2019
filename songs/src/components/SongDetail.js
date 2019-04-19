import React from 'react';
import {connect} from 'react-redux';
const SongDetail = ({song})=>{
    //console.log(props);
    if(!song){
        return <div>Please select a song</div>
    }
    return <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title} 
                <br/>
                Duration: {song.duration}
            </p>
        </div>
};

const mapSateToProps = (state)=>{
    console.log(state)
    return {song: state.selectedSong}
}


export default connect(mapSateToProps)(SongDetail);


