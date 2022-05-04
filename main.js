const express = require('express');
const hbs = require('hbs');

// Initializing the app.
const app = express();

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'hbs');

// Getting the path request and sending the response with text
const index = require('./routes/index.js')
const bruh = require('./routes/bruh.js')

app.use('/', index);
app.use('/bruh', bruh);

// Listen on port 2000
app.listen(2000, ()=>{
    console.log('listening at http://localhost:2000');
})