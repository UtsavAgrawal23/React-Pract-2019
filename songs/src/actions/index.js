// Action Creator
// we are using named export
export const selectSong = (song)=>{
    return {
        type:'SONG_SELECTED', // type is mandatory
        payload:song   //Payload is optional in actions
    };
}

//export default selectSong;