const express = require('express');
const router = express.Router();

router.get('/', function (request, response){
  response.render('bruh.hbs',{
    user:"bruh",
    pass:"test"
  })
})

router.get('/:id',(request,response)=>{
})


module.exports = router;