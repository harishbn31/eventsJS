const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.new
    }
}) 

const Event = mongoose.model('Event',eventSchema);

module.exports = {
    Event
}