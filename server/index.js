const express = require('express');
const app = express(); //obj app to manage server
const port = 3000;

app.use(express.static('public')); 
// static file from the public directory, every file under /public will access via http request

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => { //start the server, callback
    console.log(`Server listening at http://localhost:${port}`);
});

