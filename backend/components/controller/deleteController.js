const deleteData = async (req,res)=>{
    try{
        return res.json({
            statusCode:200,
            body:"delete request"
        })
    }catch(e){
        return res.json({
            statusCode:500,
            body:e.message
        })
    }
}

module.exports = {deleteData}