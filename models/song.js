const mongoose = require("mongoose");
const Schema = require("Schema");

const SongSchema = new Schema({
title: { type: string, required: true },
artist: { type: string, required: true},
album: { type: string, required:true},
year: { type: Year, default: Year.now }
});

const Song = mongoose.model("Song", songSchema)

module.exports = Song;

