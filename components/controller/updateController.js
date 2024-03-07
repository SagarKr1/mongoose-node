const book = require('../models/bookModel')

const update = async (req, res) => {
    try {
        let query = req.params;
        const params = {
            "_id": query.id
        }
        const getData = await book.findOne(params);

        const data = req.body;
        if (data.title != "" && data.author != "" && data.publisher != "" && data.description != "" && data.release_date != "") {
            const params1 = {
                title: data.title,
                author: data.author,
                publisher: data.publisher,
                description: data.description,
                release_date: data.release_date
            }
            await book.updateOne(params, params1)
            return res.json({
                statusCode: 200,
                body: "update successfully"
            })
        } else {
            return res.json({
                statusCode: 400,
                body: "Some fields are missing"
            })
        }
    } catch (e) {
        return res.json({
            statusCode: 500,
            body: e.message
        })
    }
}

module.exports = { update }