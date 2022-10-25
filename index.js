const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;

const course = require('./data/courses.json');
app.get('/', (req, res) => {
    res.send('server is running')
})
app.get('/courses', (req, res) => {
    res.send(course)
})

app.listen(port, () => {
    console.log('server is running on ', port)
})