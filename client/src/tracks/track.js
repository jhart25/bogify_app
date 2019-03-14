import React from 'react'

const Track = (props) => {
    const { track } = props;
    return (
        <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
        <div classname="card-body">
        <h5>{track.artist.name}</h5>
        <p className="card-text">
        <strong><i className="fas fa-play"></i> Track</strong>: {track.track_name}
        <br/>
        <strong><i className="fas fa-compact-disc"></i> Track</strong>: {track.track_name}
        {track.album_name}
        </p>
        <Link 
        to={`BestHits/track/${track.track_id}`}  className="btn btn-dark btn-block">
        <i className="fas fa-chevron-right"></i> View Best Hits
        </div>
        </div>
        </div>
    )
}

export default Track;