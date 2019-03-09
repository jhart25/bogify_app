import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="">
        <h1>Bogify</h1>
        <h2>A more Social Spotify</h2>
        <a href="http://localhost:8888">
          <button>Login With Spotify</button>
        </a>
      </Hero>
    </div>
  );
}

export default About;
