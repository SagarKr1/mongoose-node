const book = require('../models/bookModel');


const add = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        if (data.title != "" && data.author != "" && data.publisher != "" && data.description != "" && data.release_date != "") {
            let params = {
                title: data.title,
                author: data.author,
                publisher: data.publisher,
                description: data.description,
                release_date: data.release_date
            }
            console.log(params);
            const store = await book.create(params);
            // book.save();
            console.log(store);
            return res.json({
                statusCode: 200,
                body: "Data insert successfully"
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

module.exports = { add };