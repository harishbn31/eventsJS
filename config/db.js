const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// const CONNECTION_URI = 'mongodb://harish:harrybn_31@ds223653.mlab.com:23653/rsvp_data' || 'mongodb://localhost:27017/rsvp_data'
// let process.env.MONGODB_URI = 'mongodb://harish:harrybn_31@ds223653.mlab.com:23653/rsvp_data'
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rsvp_data'
mongoose.set('debug',true)
mongoose.connect(CONNECTION_URI,{useNewUrlParser: true}).then(()=>{
    console.log('connected to db')
    console.log(process.env)
    console.log(process.env.NODE_ENV)
    console.log(process.env.MONGODB_URI)
}).catch((err) => {
    console.log(err)
})
mongoose.set('useCraeteIndex',true);
module.exports = {
    mongoose
}