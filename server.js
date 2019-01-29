const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan');
const {router} = require('./config/routes');
const mongoose = require('./config/db');
const cors = require('cors');
app.use(cors())
app.use(express.json());

app.use(morgan('short'));
// app.use('/',router)
app.use(express.static(path.join(__dirname, 'app/react/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'app/react/build/index.html'));
  });
// app.use(express.static(root,'./app/index.html'));
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});
