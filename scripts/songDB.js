const mongoose = require("mongoose")
const db = require("../models");

//This file empties the song collection//

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const SongSeed = [
{
title:"Loner",
artist:"Caroline Rose",
album:"I will not be afraid",
year:"2019",
},
{
title:"Sleep to Dream",
artist:"Bettye La Vette",
album:"I've got my own hell to Raise",
year:"2005",
},
{
title:"Orlando",
artist:"Blood Orange",
album:"Negro Swan",
year:"2018",
},
{
title:"Rabit hole",
artist:"Rosanne Cash",
album:"She remembers everything",
year:"2013",
},
{
title:"High time",
artist:"Kacey Musgraves",
album:"Pageant Material",
year:"2015",
},
{
title:"In Parallel",
artist:"kelly Moran",
album:"Ultraviolet",
year:"2018",
},
{
title:"Texas is my mother",
artist:"Alejandro Escovedo",
album:"The crossing",
year:"2018",
},
{
title:"Babylon",
artist:"Richard Swift",
album:"The Hex",
year:"2018",
},
{
title:"Oom She La La",
artist:"Haley Heyndrerickx",
album:"I need to start a Garden",
year:"2017",
},
{
title:"Self",
artist:"Noname",
album:"Room 25",
year:"2016",
},
{
title:"disgraced in America",
artist:"Ought",
album:"Room inside the World",
year:"2018",
},
{
title:"This home",
artist:"Courtney Marie Andrews",
album:"May your kindness remain",
year:"2016",
},
{
title:"One point perspective",
artist:"Arctic monkeys",
album:"Tranquility Base hotel & Casino",
year:"2018",
},
{
title:"Me and Michael",
artist:"MGMT",
album:"Little Dark Age",
year:"2018",
},
{
title:"Date Night",
artist:"Father John Misty",
album:"God's Favorite customer",
year:"2017",
},
{
title:"",
artist:"Sunflower Bean ",
album:"Twentytwo in blue",
year:"2017",
},
{
title:"Awaken",
artist:"Caoilfhionn Rose",
album:"Awaken",
year:"2018",
},
{
title:"Once in my life",
artist:"The Decemberists",
album:"I will be your girl",
year:"2018",
},
{
title:"Remember my name",
artist:"Mitski",
album:"Be the Cowboy",
year:"2018",
},
{
title:"City looks pretty",
artist:"Courtney Barnett",
album:"Tell me how you really feel",
year:"2018",
},
];

db.Song
.remove({})
.then(() => db.Song.collection.insertMany(songSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});






