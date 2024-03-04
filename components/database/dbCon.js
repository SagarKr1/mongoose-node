const mongoose = require('mongoose');

require('dotenv').config();

const conDB = async ()=>{
    await mongoose.connect(process.env.URI,()=>{
        console.log("DB Connected Successfully");
    })
}

conDB()