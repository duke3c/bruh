const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const user = require('../models/user.js')

router.get('/', function (request, response){
  response.render('register.hbs',{
    user:"bruh",
    email:"idk",
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

  acc.save().then(() => response.send('bruh'))
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