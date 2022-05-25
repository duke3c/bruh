const express = require('express');
const router = express.Router();

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
    user: request.body.user,
    email: request.body.email,
    password: request.body.pass
  });

  acc.save().then(() => console.log("One entry added"));
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