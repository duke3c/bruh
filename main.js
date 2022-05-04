const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'hbs');


const index = require('./routes/index.js')
const bruh = require('./routes/bruh.js')

app.use('/', index);
app.use('/bruh', bruh);

app.listen(3000, ()=>{
    console.log('listening at http://localhost:3000');
})