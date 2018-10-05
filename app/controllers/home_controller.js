const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    let ob = {
        name: 'harish'
    }
    res.redirect('https://www.google.com')
});


module.exports = {
    h_controller: router
}