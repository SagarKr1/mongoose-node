const express = require('express');

const router = express.Router();

router.route("/").get((req,res)=>{
    try{
        console.log("get request");
        return res.json({
            statusCode:200,
            body:"get request"
        })
    }catch(e){
        return res.json({
            statusCode:500,
            body:e.message
        })   
    }
})

module.exports = router;