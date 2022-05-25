const express = require('express');
const router = express.Router();

router.get('/', function (request, response){
  response.render('register.hbs',{
    user:"bruh",
    email:"idk",
    pass:"test"
  })
})
/*router.post('/', function (request, response){
  console.log(request.body)
  response.redirect("/bruh/"+request.body.user)
})

router.get('/:id',(request,response)=>{
  var data = request.params.id;
  
  response.render('id.hbs',{
    subject:"bruh",
    datas:data
  })
})*/


module.exports = router;