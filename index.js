const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;

app.get('/', (req, res) => {
    res.send('server is running')
})
app.listen(port, () => {
    console.log('server is running on ', port)
})