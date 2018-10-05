const express = require('express');
const router = express.Router();
const _= require('lodash');
const {Registration} = require('../models/registration')

router.get('/',(req,res) => {
    Registration.find().then((regs) => {
        res.send(regs)
    }).catch(err => {
        res.send(err)
    })
})
router.get('/:id',(req,res) => {
    Registration.findById(req.params.id).populate('event').then((regs) => {
        res.send(regs)
    }).catch(err => {
        res.send(err)
    })
})

router.post('/',(req,res) => {
    let body = _.pick(req.body,['event','name','email','mobile'])
    let registration = new Registration(body)
    registration.save().then((reg) => {
        res.send({
            reg,
            notice: "Succes"
        })
    }).catch(err => {
        res.send(err);
    })
})
router.delete('/:id',(req,res)=>{
    Registration.findByIdAndDelete(req.params.id).then((reg)=>{
        res.send({
            reg,
            notice: "Successfully deleted"
        })
    })
})

module.exports = {
    regController: router
}
