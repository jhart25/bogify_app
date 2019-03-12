import React, { Component } from "react";
import Spotify from 'spotify-web-api-js';
import Container from "../components/Container";

const spotifyWebApi = new Spotify();

class Discover extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyWebApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying(){
    spotifyWebApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name: response.item.name, 
              albumArt: response.item.album.images[0].url
            }
        });
      })
  }
  render() {
    return (
      <div className="text-center">
      <Container style={{ minHeight: "80%" }}>
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/><br></br>
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Discover;