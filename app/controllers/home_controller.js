const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    let ob = {
        name: 'harish'
    }
    // res.sendFile('welcome to RSVP')
    res.sendFile('./index.html',{ root: './' });
});


module.exports = {
    h_controller: router
}