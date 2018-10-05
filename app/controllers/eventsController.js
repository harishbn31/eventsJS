const express = require('express');
const router = express.Router();
const {Event} = require('../models/event');
const _= require('lodash');

router.get('/',(req,res) => {
    // res.send('welcome to RSVP events index')
    Event.find().then((events) => {
        res.send(events)
    }).catch(err => {
        res.send(err)
    })
})
router.post('/',(req,res) => {
    let body = _.pick(req.body,['name','description','eventDate'])
    let event = new Event(body)
    event.save().then((events) => {
        res.send({
            events,
            notice: "Successfully inserted"
        })
    }).catch(err => {
        res.send(err);
    })
});
router.get('/:id',(req,res) => {
    Event.findById(req.params.id).populate('registrations').then((event) => {
        res.send(event)
    })
    
})
router.delete('/:id',(req,res) => {
    Event.findByIdAndRemove(req.params.id).then((event) => {
        res.send({
            event,
            notice: "Successfully Deleted"
        })
    })
})
router.put('/:id',(req,res)=> {
    let body = _.pick(req.body,['name'])
    Event.findOneAndUpdate(req.params.id, {$set: body},{new: true}).then((event) =>{
        res.send({
            event,
            notice: "Successfully Updated"
        });
    }).catch(err => {
        res.send(err)
    })
})


module.exports = {
    eventsController: router
}
