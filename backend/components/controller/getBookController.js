const book = require('../models/bookModel');


const getBook = async (req, res) => {
    try {
        const query = req.params;
        console.log(query);
        const params = {
            "id":query.id
        }
        const getData = await book.find(params);
        return res.json({
            statusCode: 200,
            body: getData
        })
    } catch (e) {
        return res.json({
            statusCode: 500,
            body: e.message
        })
    }
}

const getAll = async (req, res) => {
    try {
        const getData = await book.find();
        console.log(getData);
        return res.json({
            statusCode: 200,
            body:getData
        })
    } catch (e) {
        return res.json({
            statusCode: 500,
            body: e.message
        })
    }
}

module.exports = {
    getBook,
    getAll
};