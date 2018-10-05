const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const CONNECTION_URI = 'mongodb://harishbn31:harrybn_31@ds223653.mlab.com:23653/rsvp_data' || 'mongodb://localhost:27017/rsvp_data'
mongoose.connect(CONNECTION_URI,{useNewUrlParser: true}).then(()=>{
    console.log('connected to db')
}).catch((err) => {
    console.log(err)
})

module.exports = {
    mongoose
}