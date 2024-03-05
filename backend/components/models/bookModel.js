const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    release_date:{
        type:Date,
        required:true
    }
})