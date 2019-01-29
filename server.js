const express = require('express');
const app = express();
const morgan = require('morgan');
const {router} = require('./config/routes');
const mongoose = require('./config/db');
const cors = require('cors');
app.use(cors())
app.use(express.json());

app.use(morgan('short'));
app.use('/',router)
// app.use(express.static(root,'./app/index.html'));
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});
