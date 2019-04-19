import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component {

    renderSongLIst(){
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                      <div className="right floated content">
                        <button className="ui button primary" onClick={()=> this.props.selectSong(song)}>Select</button>
                      </div> 
                      <div className="content">{song.title}</div> 
                </div>
            );
        });
    }
    render(){
        return <div className="ui divided list">{this.renderSongLIst()}</div>
    }

}
// we can write any name , this name is by convention
const mapStateToProps =  (state)=>{
    console.log("from songlist")
    return {songs:state.songs}; // this.props === {songs:state.songs}
}

export default connect(mapStateToProps,{selectSong:selectSong})(SongList);