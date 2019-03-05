var express = require("express");

var mongoose = require("mongoose");
var path = require("path");
var app = express();
const PORT = process.env.port || 8000;

const db = BogifySongsSearch;

const MONGODB_URL = process.env.MONGODB_URL || `mongodb: localhost: ${dbname}; `
const db = require("./db/models/")(mongoose);

app.use(express.urlencoded({extended: true}));
app.use(express.json);
require("./routes")(app);
//Static assets//
if (process.env.NODE_ENV === "development") {
    app.use(express.static("client/build"));


    // API ROUTES //

    const { SONGS_API_SERVER_KEY} = process.client_server;
    const apiRouter = express(Router);
    require("./routes/index.js")


    //Require the api key//
    app.use(routes);

    App.listen(PORT, function(){
     console.log("App Server is listening on port" + PORT)
    });
}



   