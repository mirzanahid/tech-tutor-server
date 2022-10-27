const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors');

app.use(cors());

const courses = require('./data/courses.json');





app.get('/', (req, res) => {
    res.send('TechTutor api running!')
});

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const courseDetails = courses.find(course => course.id === id);
    res.send(courseDetails)
});
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const premium = courses.find(course => course.id === id);
    res.send(premium)
});


app.listen(port, () => {
    console.log(`TechTutor server running ${port}`)
})