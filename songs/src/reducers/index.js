
import {combineReducers} from 'redux';

const songReducers =  ()=>{
    // it will just return a static list of songs
    return [
        {title:'No Scrubs', duration:'4.05'},
        {title:'Macarena', duration:'2.30'},
        {title:'All star', duration:'3.30'}
    ]
}


//-----------------------
const selectedSongReducer = (selectedSong = null, action)=>{
        if(action.type === "SONG_SELECTED"){
            return action.payload;
        }
        return selectedSong;
}

export default combineReducers({
    songs:songReducers,
    selectedSong:selectedSongReducer
});