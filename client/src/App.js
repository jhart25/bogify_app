<<<<<<< HEAD
import React, { Component } from "react";
import ClickButton from "./components/ClickButton";
import DeleteBtn from "./components/Deletebtn";
import Form, { Input } from "./components/Form";
import Jumbotron from "./components/Jumbotron";
import List from "./components/List";
import Nav from "./components/Nav";
import Button from "./components/ClickButton";

class App extends Component {
    state = {
        Songs: [],
        Songsearch: ""
    };

   handleInputChange = event => {
    
    //Right now i am gonna update the state

    const {title, artist, album, year, value } = event.target;
       this.setState({
         [title]: value,
         [artist]: value,
         [album]: value,
         [year]: value
       });
    };
    
    handleFormSubmit = event => {
   // When the form is submitted, prevent its default behaviour, get recipes, update the recipes state
  event.preventDefault();
  API.getSongs(this.state.SongSearch)
  .then(res => this.setState({ Songs: res.data }))
  .catch(err => console.log(err));
    };

  render() {
  return (
      <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="sm-12">
           <form>
     <Container>
     <Row>
     <Col size="xs-9 sm-12">
     <Input
      name="SongSearch"
      value={this.state.SongSearch}
      onChange={this.handleInputChange}
      placeholder="Search For a Song"
      />
      </Col>
      <Col size="xs-3 sm-2">
      <Button
      onClick={this.handleFormSubmit}
      type="Danger"
      className="input-lg"
    >
        Search
    </Button>
    </Col>
    </Row>
    </Container>
    </form>
    </Col>
    </Row>
   <Col size="xs-12">
   {!this.state.Songs.length ? (
       <h1 className="text-center">No Songs to play</h1>
   ) : (
      <SongsList>
      {this.state.Songs.map(songs => {
          return (
            <SongListItem
            key={song.title}
            title={song.title}
            artist={song.artist}
            album={song.album}
            year={song.year}
            />
          );
      })}
      </SongList>
   )}
    </Col>
   </Row>
   </Container>
   </div>
      );
      }
   }

   export default App;
=======
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
>>>>>>> 730704208e7980e9f54488df66d4517885d25b8a
