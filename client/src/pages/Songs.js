import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/"
import { Song, SongFeature } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Songs extends Component {
    