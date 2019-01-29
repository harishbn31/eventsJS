const express = require('express');
const router = express.Router();
const path = require('path');
const {h_controller} = require('../app/controllers/home_controller');
const {eventsController} = require('../app/controllers/eventsController')
const {regController} = require('../app/controllers/registrationsController') 
// router.use('/',h_controller);
// router.use(express.static(path.join(__dirname, 'react/build')));
router.get('/', (req, res) => {
    // res.send("Hello")
    // res.sendFile('index.html' , { root : 'app/react/build'});
    res.sendFile('main.html' , { root : 'app/react/build'});
  });
router.use('/events',eventsController)
router.use('/registrations',regController)
module.exports = {
    router
}