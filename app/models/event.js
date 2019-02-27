const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true,
        minlength: 5
    },
    eventDate: [{
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        }
    }],
    registrations: [{
        type: Schema.Types.ObjectId,
        ref: 'Registration'
    }]
}) 

const Event = mongoose.model('Event',eventSchema);

module.exports = {
    Event
}