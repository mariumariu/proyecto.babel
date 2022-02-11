import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/sum',(req,res) => {
    const sum = 1 + 2;
    res.send(sum.toString());
})
app.listen(3001,() => {
     console.log(`app is listening to port 3001`);
})
