const express = require('express');
const router = express.Router();
const path = require('path');
const {h_controller} = require('../app/controllers/home_controller');
const {eventsController} = require('../app/controllers/eventsController')
const {regController} = require('../app/controllers/registrationsController') 
// router.use('/',h_controller);
router.use(express.static(path.join(__dirname, '../app/react/build')));
// router.use(express.static(path.resolve('app/react/build/index.html')));
router.get('/', (req, res) => {
    res.sendFile(path.resolve('../app/react/build/index.html'));
  });
router.use('/events',eventsController)
router.use('/registrations',regController)
module.exports = {
    router
}