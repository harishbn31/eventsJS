const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// const CONNECTION_URI = 'mongodb://harish:harrybn_31@ds223653.mlab.com:23653/rsvp_data' || 'mongodb://localhost:27017/rsvp_data'
// let process.env.MONGODB_URI = 'mongodb://harish:harrybn_31@ds223653.mlab.com:23653/rsvp_data'
const CONNECTION_URI = 'mongodb://harish:harrybn_31@cluster0-shard-00-00-7wzo7.mongodb.net:27017,cluster0-shard-00-01-7wzo7.mongodb.net:27017,cluster0-shard-00-02-7wzo7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rsvp_data'
mongoose.set('debug',true)
mongoose.connect(CONNECTION_URI,{useNewUrlParser: true}).then(()=>{
    console.log('connected to db')
}).catch((err) => {
    console.log(err)
})
mongoose.set('useCraeteIndex',true);
module.exports = {
    mongoose
}