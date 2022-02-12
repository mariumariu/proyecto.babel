import express from 'express';
import bodyParser from 'body-parser';
const plumbus = require('rickmortyapi');

const app = express();
app.use(bodyParser.json());

app.get('/rm',async(req,res) => {
    const episodes = await got.get('https://rickandmortyapi.com/api/episode/10');
    res.json(episodes);
    console.log(episodes)
})
app.listen(3001,() => {
     console.log(`app is listening to port 3001`);
})
