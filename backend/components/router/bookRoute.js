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

// router.route("/").get((req,res)=>{
//     console.log("get request");
// })

// router.route("/").get((req,res)=>{
//     console.log("get request");
// })

module.exports = router;