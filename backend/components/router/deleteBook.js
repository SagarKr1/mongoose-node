const express = require('express');

const router = express.Router();

router.route("/api/:id").delete((req,res)=>{
    try{
        console.log(`delete request ${req.params.id}`);
        return res.json({
            statusCode:200,
            body:`delete request ${req.params.id}`
        })
    }catch(e){
        return res.json({
            statusCode:500,
            body:e.message
        })   
    }
})


module.exports = router;