const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const path = require('path');
const config = require('./config/database');
mongoose.connect(config.uri);
mongoose.connection.on('connected',()=>{
    console.log('Connected to the database ',config.uri);
});
mongoose.connection.on('error',(err)=>{
    console.log('Error in connecting to the DB ',err);
});
app.use(express.static(__dirname+'/client/dist/'));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});
app.listen(port,()=>{
    console.log('Listening to the port ',port);
});
