const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors');


app.use(cors());


app.get('/', (req, res) => {
    res.send('techistic-education api running!')
});



app.listen(port, () => {
    console.log(`techistic-education server running ${port}`)
})