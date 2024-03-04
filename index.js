const express = require('express');
require('dotenv').config();
require('./components/database/dbCon')
const app = express();

app.use("/",require("./components/router/bookRoute"));


app.listen(process.env.PORT || 6000,()=>{
    // console.log(process.env);
    console.log(`http://localhost:${process.env.PORT || 6000}`)
})