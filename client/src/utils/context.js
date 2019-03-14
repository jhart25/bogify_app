import React from 'react';
import Context from 'context';
import Axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list: [],
        heading: 'Top 10 Tracks'
    };

    componentDidMount() {
      axios
        .get(
        `https://cors-anywhere.herokuapp.com/http://api.musicmatch.com/ws/1.1/chart.tracks.
        get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
            process.env.REACT_APP_MM_KEY
        }`
        )
        .then(res => {
             console.log(res.data);
             this.SetState({track_list: res.data.message.body.track_list});
        })
        .catch(err =>console.log(err));
    }

    render() {
        return (
        <Context.Provider value={this.state}>
        {this.props.children}
        </Context.Provider>
        );
    
});
