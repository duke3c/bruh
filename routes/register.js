const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const user = require('../models/user.js')
var rand = Math.floor(Math.random() * 100);

router.get('/', function (request, response){
  response.render('register.hbs',{
    user:rand,
    email:"idk@gmail.com",
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

/*router.get('/:id',(request,response)=>{
  var data = request.params.id;
  
  response.render('id.hbs',{
    subject:"bruh",
    datas:data
  })
})*/


module.exports = router;