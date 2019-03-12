import React, { Component } from "react";
import Container from "../components/Container";
import { SpotifyApiContext, Artist } from 'react-spotify-api';

class Search extends Component {

render(props) {
  return (
    <Container>
      <SpotifyApiContext.Provider value={props.token}>
          <Artist id={props.id}>
              {(artist, loading, error) =>
                  artist ? (
                      <div>
                          <h1>{artist.name}</h1>
                          <ul>
                              {artist.genres.map(genre => (
                              <li key={genre}>{genre}</li>
                              ))}
                          </ul>
                      </div>
                  ) : null
              }
          </Artist>
      </SpotifyApiContext.Provider>
    </Container>
  )
}
}

export default Search;
