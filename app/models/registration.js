const mongoose = require('mongoose');
const {Event} = require('./event')

const Schema = mongoose.Schema 

const regSchema = new Schema({
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
regSchema.post('save',function(){
    Event.findById(this.event).then((ev)=>{
        console.log('before ',ev.registrations)

        ev.registrations.push(this._id)
        console.log('after',ev.registrations)
        ev.save();

    }).catch((err) => {
        // return Promise.reject(err)
        consile.log(err)
    })
})

const Registration = mongoose.model('Registration',regSchema)
module.exports = {
    Registration
}

