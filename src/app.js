const express = require("express");
const UserRouter=require("./routes/UserRouter");
const TrackRouter=require("./routes/TrackRouters");
const AlbumRouter=require("./routes/AlbumRouter");
const ArtistRouter=require("./routes/ArtistRouter");
const app = express();

app.use(express.json());//reqbody get karne ke liy
app.use(express.urlencoded({ extended: false }));//postman ke formdata se data get karne ke liy

app.use('/user',UserRouter);
app.use('/track',TrackRouter);
app.use('/album',AlbumRouter);
app.use('.artist',ArtistRouter);
module.exports=app;