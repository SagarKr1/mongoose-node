const getBook = async (req, res) => {
    try {
        console.log("get request");
        return res.json({
            statusCode: 200,
            body: "get request "+req.params.id
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
        console.log("get request");
        return res.json({
            statusCode: 200,
            body: "get request"
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