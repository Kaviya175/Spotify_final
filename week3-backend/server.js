// const express = require('express');
// const app = express();
// const bodyParser=require('body-parser')
// const cors = require('cors');
// const AuthRouter=require('./routes/AuthRouter');
// const SongRoutes=require("./routes/SongRoutes");
// //const mongoose=require('mongoose');
// //const DB_UR1='mongodb://localhost:27017/authDB'
// require('dotenv').config(); // Add parentheses to properly invoke dotenv.conf
// require('./Models/db');
// const PORT = process.env.PORT || 9090;
// const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
// const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
// app.get('/ping', (req, res) => {
//     res.send('PONG');
// });
// app.use(bodyParser.json());
// app.use(cors());
// //mongoose.connect(DB_UR1).then(()=>{
//   //  console.log('Connected to MongoDB');
// //}).catch((err)=>{
//   //  console.log('Error connecting to MongoDB',err);
// //});



// app.use('/auth',AuthRouter)
// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`);
// });


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios"); // Add axios import
const AuthRouter = require("./routes/AuthRouter");
const SongRoutes = require("./routes/SongRoutes");
require("./Models/db");
dotenv.config(); // Ensure proper invocation
const app = express();
const PORT = process.env.PORT || 9090;
// Middleware
app.use(bodyParser.json());
app.use(cors()); 
// Route for new releases
app.get('/api/new_releases', async (req, res) => {
  try {
    const response = await axios.get('https://spotify-scraper.p.rapidapi.com/v1/prerelease/details?prereleaseId=1xG1JGP3SGtNEpmOAkwrus', {
      params: { limit: 10, country: 'US', offset: 0 },
      headers: {
        'x-rapidapi-key': '564e4e0d37mshac9767d1ee0a2abp1e1',
        'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// Routes
app.use("/auth", AuthRouter);
app.use("/api/songs", SongRoutes);
app.get("/ping", (req, res) => {
  res.send("PONG");
});
// Single app.listen
app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`);
});