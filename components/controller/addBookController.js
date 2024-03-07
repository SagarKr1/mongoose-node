const book = require('../models/bookModel');


const add = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        if (data.title != "" && data.author != "" && data.publisher != "" && data.description != "" && data.release_date != "") {
            let params = {
                title: "",
                author: "",
                publisher: "",
                description: "",
                release_date: ""
            }
            console.log("post request");
            return res.json({
                statusCode: 200,
                body: "post request"
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