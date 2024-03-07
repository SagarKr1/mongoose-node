const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title:{
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
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Book",bookSchema);