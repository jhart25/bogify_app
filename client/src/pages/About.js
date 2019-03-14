import React from "react";
import Carousel from "../components/Carousel";

function About() {
  return (
    <div>
      <Carousel />
        <h1>Bogify</h1>
        <h2>A more Social Spotify</h2>
        <a href="http://localhost:3000">
          <button>Login With Spotify</button>
        </a>
    </div>
  );
}

export default About;