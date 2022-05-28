const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const user = require('../models/user.js')
var rand = Math.floor(Math.random() * 100);

router.get('/', function (request, response){
  response.render('register.hbs',{
    user:rand,
    email:`idk${rand}@gmail.com`,
    pass:"test"
  })
  console.log(request.body)

})
router.post('/', function (request, response){
  const acc = new user({
    email: request.body.email,
    user: request.body.user,
    password: request.body.pass
  });

  acc.save().then(() => console.log("one entry sent"))
  response.send('works')
})

router.get('/get', function(request, response){
  response.send('bruh')
})

module.exports = router;