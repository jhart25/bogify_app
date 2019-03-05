import axios from "axios";

// Export an object containing methods we'll use for accessing the Spotify API

export default {
  getArtist: function() {
    return axios.get("https://api.spotify.com/v1/artists/{id}");
  },
  getTrack: function() {
    return axios.get("https://api.spotify.com/v1/tracks/{id}");
  },
  createPlaylist: function() {
    return axios.post("https://api.spotify.com/v1/users/{user_id}/playlists");
  },
  getPlaylist: function() {
    return axios.get("https://api.spotify.com/v1/playlists/{playlist_id}");
  },
  addToPlaylist: function() {
    return axios.post("https://api.spotify.com/v1/playlists/{playlist_id}/tracks");
  },
  removeFromPlaylist: function() {
    return axios.delete("https://api.spotify.com/v1/playlists/{playlist_id}/tracks");
  },
};