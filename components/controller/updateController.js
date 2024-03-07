const update = async (req,res)=>{
    try{
        return res.json({
            statusCode:200,
            body:"update request"
        })
    }catch(e){
        return res.json({
            statusCode:500,
            body:e.message
        })
    }
}

module.exports = {update}