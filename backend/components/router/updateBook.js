const express = require('express');

const router = express.Router();

router.route("/api/:id").put((req,res)=>{
    try{
        console.log(`put request ${req.params.id}`);
        return res.json({
            statusCode:200,
            body:`put request ${req.params.id}`
        })
    }catch(e){
        return res.json({
            statusCode:500,
            body:e.message
        })   
    }
})

module.exports = router;