const express = require('express');
const router = express.Router();
const {h_controller} = require('../app/controllers/home_controller');
const {eventsController} = require('../app/controllers/eventsController')
router.use('/',h_controller);
router.use('/events',eventsController)
module.exports = {
    router
}