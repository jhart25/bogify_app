import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="artist">Artist(s) Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="artist"
          list="artists"
          type="text"
          className="form-control"
          placeholder="Type in a artist name to begin..."
          id="artist"
        />
        <datalist id="artists">
          {props.artists.map(artist => (
            <option value={artist} key={artist} />
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
