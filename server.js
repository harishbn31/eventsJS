const express = require('express');
const app = express();
const morgan = require('morgan');
const {router} = require('./config/routes');
const mongoose = require('./config/db');




app.use(express.json());

app.use(morgan('short'));
app.use('/',router)
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});
