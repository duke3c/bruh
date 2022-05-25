require("dotenv").config(); 

const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose')

const port = 3000

const app = express();

mongoose
.connect(
    process.env.DB_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const USchema = new mongoose.Schema({
    user: String,
    password: String
});

const User = mongoose.model('User', USchema);

/*const ubruh = new User({
    user: 'bozo',
    password: 58
});*/

//ubruh.save().then(() => console.log("One entry added"));

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'hbs');

const index = require('./routes/index.js')
const bruh = require('./routes/bruh.js')

app.use('/', index);
app.use('/bruh', bruh);

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`);
})