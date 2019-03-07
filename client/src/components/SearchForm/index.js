import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="song">Song or Artist(s) Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="song"
          list="songs"
          type="text"
          className="form-control"
          placeholder="Type in a song or artist name to begin..."
          id="song"
        />
        <datalist id="songs">
          {props.songs.map(song => (
            <option value={song} key={song} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
