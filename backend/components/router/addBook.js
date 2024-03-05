const express = require('express');

const router = express.Router();


router.route("/api").post((req,res)=>{
    try{
        console.log("post request");
        return res.json({
            statusCode:200,
            body:"post request"
        })
    }catch(e){
        return res.json({
            statusCode:500,
            body:e.message
        })   
    }
})


module.exports = router;