const book = require('../models/bookModel')

const deleteData = async (req,res)=>{
    try{
        const query = req.params;
        console.log(query);
        const params = {
            "_id":query.id
        }
        const getData = await book.deleteOne(params);
        return res.json({
            statusCode:200,
            body:"Data deleted successfully"
        })
    }catch(e){
        return res.json({
            statusCode:500,
            body:e.message
        })
    }
}

module.exports = {deleteData}