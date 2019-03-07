import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="track">Track or Artist(s) Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="track"
          list="tracks"
          type="text"
          className="form-control"
          placeholder="Type in a track or artist name to begin..."
          id="track"
        />
        <datalist id="tracks">
          {props.tracks.map(track => (
            <option value={track} key={track} />
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
