const express = require('express');
const createToken = require('../lib/auth').createToken();
const User = require('../models/user');

const router = express.Router();

router.post('/login', (req, res) => {
    User.login(req.body.email, req.body.password).then((user) => {

       res.status(201).send()
   }).catch(  ()  => {
       res.status(400).send({
           error: "invalid username/password"
       })
   })
});


module.exports = router;