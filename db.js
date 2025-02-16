const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = 'mongodb://localhost:27017/hotels'

//const mongoURL = 'mongodb+srv://rahulaa0341:Rahul99@cluster0.zpnqa.mongodb.net/'
const mongoURL = process.env.MONGODB_URL_LOCAL

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  


const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
});

db.on('error',(err)=>{
    console.log('mongodb connection error',err);
});

db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});

module.exports = db;