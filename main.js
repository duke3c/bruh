require("dotenv").config(); 

const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose')

const user = require('./models/user')

const port = 3000

const app = express();

mongoose
.connect(
    process.env.DB_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


const ubruh = new user({
    user: 'separete file',
    email: 'idk@gmail.com',
    password: 'omg it works bruh'
});

ubruh.save().then(() => console.log("One entry added"));

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'hbs');

const index = require('./routes/index.js')
const bruh = require('./routes/bruh.js')
const register = require('./routes/register.js')


app.use('/', index);
app.use('/bruh', bruh);
app.use('/register', register)

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`);
})